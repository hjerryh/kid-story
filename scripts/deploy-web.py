#!/usr/bin/env python3
"""Prepare and deploy an exported web build to the authorized Story Island host.

Use --prepare-only to create reviewable artifacts without uploading or switching.
The installer keeps previous releases and shares unchanged files via hard links.
"""
import argparse
import datetime
import hashlib
import json
from pathlib import Path
import re
import shlex
import subprocess
import tarfile
import uuid

ROOT = Path(__file__).resolve().parents[1]


def run(command, **kwargs):
    return subprocess.run(command, check=True, text=True, **kwargs)


def digest(file):
    result = hashlib.sha256()
    with file.open('rb') as source:
        for block in iter(lambda: source.read(1024 * 1024), b''):
            result.update(block)
    return result.hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--release', required=True)
    parser.add_argument('--host', default='jingtian-server')
    parser.add_argument('--prepare-only', action='store_true')
    args = parser.parse_args()
    assert re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._-]{1,100}', args.release)
    assert re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._-]*', args.host)
    dist = ROOT / 'dist'
    assert (dist / 'index.html').is_file()
    index = json.loads((dist / 'library/index.json').read_text())
    assert all(s['status'] == 'media-ready' for s in index['stories'])
    bundled = json.loads((ROOT / 'src/content/stories.json').read_text())
    probe = """import json,os,pathlib
site=pathlib.Path('/www/wwwroot/kid-store.jentin.cn');current=os.readlink(site/'current')
manifest=site/'manifests'/(pathlib.Path(current).name+'.json')
print(json.dumps({'current':current,'manifest':json.loads(manifest.read_text())}))
"""
    response = run(['ssh', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=15', args.host,
                    shlex.join(['python3', '-c', probe])], capture_output=True)
    remote = json.loads(response.stdout)
    previous = {row['path']: row for row in remote['manifest']['files']}
    rows = [{'path': file.relative_to(dist).as_posix(), 'bytes': file.stat().st_size,
             'sha256': digest(file)} for file in sorted(dist.rglob('*')) if file.is_file()]
    changed = [row for row in rows if previous.get(row['path'], {}).get('sha256') != row['sha256']]
    for row in changed:
        if row['path'].startswith(('assets/', '_expo/static/', 'library/stories/')):
            assert row['path'] not in previous, f'Immutable path changed: {row["path"]}'
    stories = {'bundled': len(bundled), 'expansion': len(index['stories']), 'total': len(bundled) + len(index['stories'])}
    manifest = {'release': args.release, 'previous': remote['current'],
                'createdAt': datetime.datetime.now().astimezone().isoformat(),
                'baseCommit': run(['git', 'rev-parse', 'HEAD'], cwd=ROOT, capture_output=True).stdout.strip(),
                'stories': stories, 'files': rows}
    artifacts = ROOT / 'artifacts'
    artifacts.mkdir(exist_ok=True)
    manifest_file = artifacts / f'StoryIsland-Web-{args.release}.manifest.json'
    manifest_file.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    package_file = artifacts / f'StoryIsland-Web-{args.release}.incremental.tar.gz'
    with tarfile.open(package_file, 'w:gz') as package:
        for row in changed:
            package.add(dist / row['path'], arcname=row['path'], recursive=False)
    print(json.dumps({'release': args.release, 'files': len(rows), 'changedFiles': len(changed),
                      'changedBytes': sum(row['bytes'] for row in changed), 'stories': stories,
                      'packageSha256': digest(package_file), 'prepareOnly': args.prepare_only}), flush=True)
    if args.prepare_only:
        return
    upload = f'/tmp/kid-story-{args.release}-{uuid.uuid4().hex}'
    run(['ssh', '-o', 'BatchMode=yes', args.host, shlex.join(['mkdir', '-p', upload])])
    for source, name in [(package_file, 'payload.tar.gz'), (manifest_file, 'manifest.json'),
                         (ROOT / 'scripts/install-web-release.py', 'install.py'),
                         (ROOT / 'deploy/nginx/kid-store.jentin.cn.conf', 'nginx.conf')]:
        run(['scp', str(source), f'{args.host}:{upload}/{name}'])
    run(['ssh', '-o', 'BatchMode=yes', args.host,
         shlex.join(['sudo', 'python3', upload + '/install.py', '--upload', upload,
                     '--release', args.release, '--previous', remote['current']])])


if __name__ == '__main__':
    main()
