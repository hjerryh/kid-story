import test from 'node:test';
import assert from 'node:assert/strict';
import { createWriteQueue } from '../src/state/storage';
test('slow writes preserve the newest progress even when an earlier write fails', async () => {
  let stored = ''; let release!: () => void;
  const first = new Promise<void>(resolve => { release = resolve; });
  const queue = createWriteQueue(async (value: string) => {
    if (value === 'old') { await first; throw new Error('disk busy'); }
    stored = value;
  });
  const old = queue('old').catch(() => {});
  const newest = queue('new');
  release(); await Promise.all([old, newest]);
  assert.equal(stored, 'new');
});
