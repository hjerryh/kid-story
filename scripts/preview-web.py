#!/usr/bin/env python3
"""Preview the production web export locally, including real MP3 byte ranges."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re


class PreviewHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        self.remaining = None
        source = Path(self.translate_path(self.path))
        request = self.headers.get('Range')
        if not request or not source.is_file():
            return super().send_head()
        match = re.fullmatch(r'bytes=(\d*)-(\d*)', request)
        size = source.stat().st_size
        if not match or not any(match.groups()):
            self.send_error(416)
            return None
        left, right = match.groups()
        start = int(left) if left else max(0, size - int(right))
        end = min(int(right), size - 1) if left and right else size - 1
        if start > end or start >= size:
            self.send_response(416)
            self.send_header('Content-Range', f'bytes */{size}')
            self.send_header('Content-Length', '0')
            self.end_headers()
            return None
        stream = source.open('rb')
        stream.seek(start)
        self.remaining = end - start + 1
        self.send_response(206)
        self.send_header('Content-type', self.guess_type(str(source)))
        self.send_header('Content-Length', str(self.remaining))
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.end_headers()
        return stream

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def copyfile(self, source, destination):
        if self.remaining is None:
            return super().copyfile(source, destination)
        while self.remaining:
            block = source.read(min(65536, self.remaining))
            if not block:
                break
            destination.write(block)
            self.remaining -= len(block)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8082)
    parser.add_argument('--directory', default='dist')
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(PreviewHandler, directory=args.directory))
    print(f'Preview: http://localhost:{args.port}/', flush=True)
    server.serve_forever()
