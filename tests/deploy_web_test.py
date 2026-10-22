import hashlib
import contextlib
import importlib.util
import io
import json
from pathlib import Path
import tarfile
import tempfile
import unittest
from unittest import mock

spec = importlib.util.spec_from_file_location('installer', Path(__file__).resolve().parents[1] / 'scripts/install-web-release.py')
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


class ReleaseAssemblyTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary.name).resolve()
        self.old = self.root / 'old'
        self.old.mkdir()
        (self.old / 'index.html').write_bytes(b'old page')
        (self.old / 'assets').mkdir()
        (self.old / 'assets/audio.mp3').write_bytes(b'unchanged media')
        (self.old / 'assets/old-client.js').write_bytes(b'cached client')
        self.new = self.root / 'new'
        self.archive = self.root / 'payload.tar.gz'

    def tearDown(self):
        self.temporary.cleanup()

    def manifest(self, entries):
        return {'files': [{'path': name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}
                          for name, data in entries.items()]}

    def package(self, entries):
        with tarfile.open(self.archive, 'w:gz') as archive:
            for name, data in entries.items():
                info = tarfile.TarInfo(name)
                info.size = len(data)
                archive.addfile(info, io.BytesIO(data))

    def test_update_preserves_previous_release_and_shares_unchanged_media(self):
        entries = {'index.html': b'new page', 'assets/audio.mp3': b'unchanged media',
                   'library/index.json': b'new catalog'}
        self.package({name: data for name, data in entries.items() if name != 'assets/audio.mp3'})
        installer.assemble(self.old, self.new, self.archive, self.manifest(entries))
        self.assertEqual((self.old / 'index.html').read_bytes(), b'old page')
        self.assertEqual((self.new / 'index.html').read_bytes(), b'new page')
        self.assertNotEqual((self.old / 'index.html').stat().st_ino, (self.new / 'index.html').stat().st_ino)
        self.assertEqual((self.old / 'assets/audio.mp3').stat().st_ino, (self.new / 'assets/audio.mp3').stat().st_ino)
        self.assertEqual((self.new / 'assets/old-client.js').read_bytes(), b'cached client')

    def test_corrupt_payload_never_modifies_previous_release(self):
        entries = {'index.html': b'new page'}
        self.package({'index.html': b'bad page'})
        with self.assertRaisesRegex(AssertionError, 'Payload hash mismatch'):
            installer.assemble(self.old, self.new, self.archive, self.manifest(entries))
        self.assertFalse(self.new.exists())
        self.assertEqual((self.old / 'index.html').read_bytes(), b'old page')

    def test_immutable_collision_is_rejected(self):
        entries = {'assets/audio.mp3': b'replaced media'}
        self.package(entries)
        with self.assertRaisesRegex(AssertionError, 'Immutable asset collision'):
            installer.assemble(self.old, self.new, self.archive, self.manifest(entries))
        self.assertEqual((self.old / 'assets/audio.mp3').read_bytes(), b'unchanged media')
        self.assertFalse(self.new.exists())

    def test_missing_payload_cannot_create_an_incomplete_release(self):
        self.package({})
        with self.assertRaisesRegex(AssertionError, 'Missing/invalid file'):
            installer.assemble(self.old, self.new, self.archive, self.manifest({'library/new.json': b'missing'}))
        self.assertFalse(self.new.exists())

    def test_archive_cannot_escape_release_directory(self):
        entries = {'../escaped': b'bad'}
        self.package(entries)
        with self.assertRaises(AssertionError):
            installer.assemble(self.old, self.new, self.archive, self.manifest(entries))
        self.assertFalse((self.root / 'escaped').exists())
        self.assertFalse(self.new.exists())

    def test_previous_symlink_is_rejected_before_cloning(self):
        external = self.root / 'external'
        external.write_bytes(b'outside release')
        (self.old / 'external-link').symlink_to(external)
        self.package({})
        with self.assertRaisesRegex(AssertionError, 'Previous release contains symlinks'):
            installer.assemble(self.old, self.new, self.archive, self.manifest({'index.html': b'old page'}))
        self.assertFalse(self.new.exists())

    def test_interrupted_hardlink_copy_leaves_retryable_destination(self):
        self.package({})
        real_link = installer.os.link
        calls = 0

        def interrupted_link(*args, **kwargs):
            nonlocal calls
            calls += 1
            if calls == 2:
                raise OSError('simulated ENOSPC')
            return real_link(*args, **kwargs)

        with mock.patch.object(installer.os, 'link', side_effect=interrupted_link):
            with self.assertRaises(Exception):
                installer.assemble(self.old, self.new, self.archive, self.manifest({'index.html': b'old page'}))
        self.assertFalse(self.new.exists())
        installer.assemble(self.old, self.new, self.archive, self.manifest({'index.html': b'old page'}))
        self.assertEqual((self.new / 'index.html').read_bytes(), b'old page')

    def remote_fixture(self):
        site = self.root / 'site'
        (site / 'releases').mkdir(parents=True)
        self.old.rename(site / 'releases/old')
        (site / 'manifests').mkdir()
        (site / 'current').symlink_to('releases/old')
        config = self.root / 'nginx.conf'
        config.write_bytes(b'old config')
        upload = self.root / 'upload'
        upload.mkdir()
        (upload / 'nginx.conf').write_bytes(b'new config')
        manifest = {**self.manifest({'index.html': b'new page'}), 'release': 'new-release', 'stories': 46}
        data = json.dumps(manifest).encode()
        (upload / 'manifest.json').write_bytes(data)
        self.package({'index.html': b'new page'})
        self.archive.rename(upload / 'payload.tar.gz')
        real_path = Path

        def redirect_path(value):
            if value == '/www/wwwroot/kid-store.jentin.cn':
                return site
            if value == '/www/server/panel/vhost/nginx/kid-store.jentin.cn.conf':
                return config
            return real_path(value)

        argv = ['install', '--upload', str(upload), '--release', 'new-release', '--previous', 'releases/old']
        return site, config, upload, data, redirect_path, argv

    def test_persists_verified_manifest_even_if_upload_changes(self):
        site, config, upload, data, redirect, argv = self.remote_fixture()

        def nginx(*args, **kwargs):
            (upload / 'manifest.json').write_text('{"unverified":true}')

        with mock.patch.object(installer, 'Path', side_effect=redirect), mock.patch('sys.argv', argv), \
                mock.patch.object(installer.subprocess, 'run', side_effect=nginx), contextlib.redirect_stdout(io.StringIO()):
            installer.main()
        self.assertEqual((site / 'manifests/new-release.json').read_bytes(), data)
        self.assertEqual((site / 'current').readlink(), Path('releases/new-release'))

    def test_site_rolls_back_even_if_config_restore_fails(self):
        site, config, upload, data, redirect, argv = self.remote_fixture()
        real_atomic = installer.atomic_bytes

        def atomic(file, data, mode=0o644):
            if file == config and data == b'old config':
                raise OSError('simulated config restore failure')
            return real_atomic(file, data, mode)

        def nginx(command, **kwargs):
            if command[-2:] == ['-s', 'reload']:
                raise OSError('simulated reload failure')

        with mock.patch.object(installer, 'Path', side_effect=redirect), mock.patch('sys.argv', argv), \
                mock.patch.object(installer.subprocess, 'run', side_effect=nginx), \
                mock.patch.object(installer, 'atomic_bytes', side_effect=atomic):
            with self.assertRaisesRegex(RuntimeError, 'config rollback'):
                installer.main()
        self.assertEqual((site / 'current').readlink(), Path('releases/old'))
        self.assertEqual((site / 'current/index.html').read_bytes(), b'old page')


if __name__ == '__main__':
    unittest.main()
