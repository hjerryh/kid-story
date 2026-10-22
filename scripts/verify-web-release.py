#!/usr/bin/env python3
"""Check the deployed export: all lengths, exact catalog, cache policy, audio ranges, 404."""
import argparse
import concurrent.futures
import json
from pathlib import Path
import time
import urllib.error
import urllib.request


def main():
    root = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', default='https://kid-store.jentin.cn')
    parser.add_argument('--dist', type=Path, default=root / 'dist')
    parser.add_argument('--report', type=Path, default=root / 'artifacts/expansion-live-http-verification.json')
    args = parser.parse_args()
    base = args.base.rstrip('/')
    files = [p for p in args.dist.rglob('*') if p.is_file()]
    failures = []
    expected_index = (args.dist / 'library/index.json').read_bytes()
    expected_stories = json.loads(expected_index)['stories']

    def head(path):
        relative = path.relative_to(args.dist).as_posix()
        request = urllib.request.Request(base + '/' + relative, method='HEAD')
        with urllib.request.urlopen(request, timeout=30) as response:
            assert response.status == 200, (relative, response.status)
            assert int(response.headers['Content-Length']) == path.stat().st_size, (relative, 'length')
            if relative.startswith('library/stories/'):
                assert 'immutable' in response.headers.get('Cache-Control', ''), (relative, 'cache')

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for job in concurrent.futures.as_completed([pool.submit(head, file) for file in files]):
            try:
                job.result()
            except Exception as error:
                failures.append(str(error))
    with urllib.request.urlopen(base + '/library/index.json', timeout=30) as response:
        assert response.read() == expected_index, 'Deployed catalog differs from the build'
        assert 'no-cache' in response.headers.get('Cache-Control', '')
    ranges = []
    for story in expected_stories:
        detail = json.loads((args.dist / story['detailUrl'].lstrip('/')).read_text())
        audio = args.dist / detail['audio'].lstrip('/')
        request = urllib.request.Request(base + detail['audio'], headers={'Range': 'bytes=1024-2047'})
        with urllib.request.urlopen(request, timeout=30) as response:
            with audio.open('rb') as source:
                source.seek(1024)
                expected = source.read(1024)
            assert response.status == 206 and response.read() == expected, (story['id'], 'audio range')
            assert response.headers['Content-Range'] == f'bytes 1024-2047/{audio.stat().st_size}'
            ranges.append(story['id'])
    for missing in ['/library/stories/missing.mp3', '/_expo/static/js/web/missing.js', '/assets/missing.webp']:
        try:
            with urllib.request.urlopen(base + missing, timeout=20):
                failures.append('Missing path did not return404: ' + missing)
        except urllib.error.HTTPError as error:
            assert error.code == 404, (missing, error.code)
    bundled = len(json.loads((root / 'src/content/stories.json').read_text()))
    report = {'base': base, 'verifiedAt': time.strftime('%Y-%m-%dT%H:%M:%S%z'),
              'newStories': len(expected_stories), 'totalStories': bundled + len(expected_stories),
              'filesChecked': len(files), 'audioRangeVerified': ranges, 'failures': failures}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'filesChecked': len(files), 'stories': len(expected_stories),
                      'audioRanges': len(ranges), 'failures': failures}, ensure_ascii=False))
    assert not failures


if __name__ == '__main__':
    main()
