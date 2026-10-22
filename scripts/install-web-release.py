#!/usr/bin/env python3
"""Remote installer: verified incremental files, hard-linked unchanged assets, atomic switch."""
import argparse
import fcntl
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import tarfile
import tempfile


def digest(file):
    result = hashlib.sha256()
    with file.open('rb') as source:
        for block in iter(lambda: source.read(1024 * 1024), b''):
            result.update(block)
    return result.hexdigest()


def safe_path(value):
    path = PurePosixPath(value)
    assert str(path) == value and not path.is_absolute() and '..' not in path.parts
    assert value not in ('', '.')
    return path


def atomic_bytes(file, data, mode=0o644):
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(dir=file.parent, prefix='.' + file.name + '.', delete=False) as output:
            temporary = Path(output.name)
            output.write(data)
            output.flush()
            os.fsync(output.fileno())
        temporary.chmod(mode)
        os.replace(temporary, file)
    finally:
        if temporary is not None and temporary.exists():
            temporary.unlink()


def assemble(previous, destination, archive, manifest):
    """Never write through an existing hard link; replace changed files atomically."""
    assert not destination.exists(), 'Release directory already exists'
    assert not previous.is_symlink() and not any(p.is_symlink() for p in previous.rglob('*')), 'Previous release contains symlinks'
    entries = {}
    for item in manifest['files']:
        name = str(safe_path(item['path']))
        assert name not in entries and isinstance(item['bytes'], int) and item['bytes'] >= 0
        assert re.fullmatch(r'[a-f0-9]{64}', item['sha256'])
        entries[name] = item
    with tarfile.open(archive, 'r:gz') as package:
        members = package.getmembers()
        assert len({m.name for m in members}) == len(members), 'Duplicate archive member'
        for member in members:
            assert member.isfile() and str(safe_path(member.name)) in entries
            assert member.size == entries[member.name]['bytes']
        # Previous releases stay intact, while unchanged bytes consume no extra blocks.
        destination.mkdir()
        try:
            shutil.copytree(previous, destination, copy_function=os.link, dirs_exist_ok=True)
            for member in members:
                row = entries[member.name]
                target = destination / member.name
                assert not any(p.is_symlink() for p in [target, *target.parents] if p != destination.parent)
                if target.is_file() and digest(target) == row['sha256']:
                    continue
                if member.name.startswith(('assets/', '_expo/static/', 'library/stories/')):
                    assert not target.exists(), f'Immutable asset collision: {member.name}'
                target.parent.mkdir(parents=True, exist_ok=True)
                temporary = target.with_name(target.name + '.deploy-tmp')
                with package.extractfile(member) as source, temporary.open('xb') as output:
                    shutil.copyfileobj(source, output)
                assert digest(temporary) == row['sha256'], f'Payload hash mismatch: {member.name}'
                temporary.chmod(0o644)
                os.replace(temporary, target)
            for name, row in entries.items():
                target = destination / name
                assert target.is_file() and target.stat().st_size == row['bytes'], f'Missing/invalid file: {name}'
                assert digest(target) == row['sha256'], f'Release hash mismatch: {name}'
        except BaseException:
            # This directory was created above and has never been promoted.
            shutil.rmtree(destination)
            raise
    return len(entries)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--upload', type=Path, required=True)
    parser.add_argument('--release', required=True)
    parser.add_argument('--previous', required=True)
    args = parser.parse_args()
    assert re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._-]{1,100}', args.release)
    site = Path('/www/wwwroot/kid-store.jentin.cn')
    config = Path('/www/server/panel/vhost/nginx/kid-store.jentin.cn.conf')
    nginx = ['/www/server/nginx/sbin/nginx', '-c', '/www/server/nginx/conf/nginx.conf']
    with (site / '.publish.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        current = site / 'current'
        assert current.is_symlink() and os.readlink(current) == args.previous, 'Current release changed; prepare again'
        previous = current.resolve()
        assert previous.parent == site / 'releases'
        manifest_bytes = (args.upload / 'manifest.json').read_bytes()
        manifest = json.loads(manifest_bytes)
        assert manifest['release'] == args.release
        destination = site / 'releases' / args.release
        checked = assemble(previous, destination, args.upload / 'payload.tar.gz', manifest)
        before = config.read_bytes()
        updated = (args.upload / 'nginx.conf').read_bytes()
        changed_config = before != updated
        backup = site / 'manifests' / f'{args.release}.nginx-before.conf'
        atomic_bytes(backup, before)
        # Persist exactly the verified manifest before any live change.
        atomic_bytes(site / 'manifests' / f'{args.release}.json', manifest_bytes)
        pending = site / f'.current-{args.release}'
        rollback = site / f'.rollback-{args.release}'
        promoted = False
        config_mode = config.stat().st_mode & 0o777
        try:
            pending.symlink_to(Path('releases') / args.release)
            rollback.symlink_to(args.previous)
            if changed_config:
                atomic_bytes(config, updated, config_mode)
            subprocess.run(nginx + ['-t'], check=True)
            os.replace(pending, current)
            promoted = True
            if changed_config:
                subprocess.run(nginx + ['-s', 'reload'], check=True)
        except BaseException as error:
            rollback_errors = []
            # Restore the site even if restoring config fails (e.g. disk full).
            if promoted:
                try:
                    os.replace(rollback, current)
                except Exception as restore_error:
                    rollback_errors.append('site rollback: ' + str(restore_error))
            if changed_config:
                try:
                    atomic_bytes(config, before, config_mode)
                    subprocess.run(nginx + ['-t'], check=True)
                    subprocess.run(nginx + ['-s', 'reload'], check=True)
                except Exception as restore_error:
                    rollback_errors.append('config rollback: ' + str(restore_error))
            if rollback_errors:
                raise RuntimeError('; '.join(rollback_errors)) from error
            raise
        finally:
            for temporary_link in [pending, rollback]:
                if temporary_link.is_symlink():
                    temporary_link.unlink()
        print(json.dumps({'release': args.release, 'previous': args.previous,
                          'verifiedFiles': checked, 'changedConfig': changed_config,
                          'stories': manifest['stories']}))


if __name__ == '__main__':
    main()
