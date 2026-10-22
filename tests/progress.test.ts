import test from 'node:test';
import assert from 'node:assert/strict';
import { getPageIndex, restorePosition, sanitizeLibrary } from '../src/state/progress';

const story: any = { id: 'a', version: 2, duration: 30, pages: [
  { id: 'p01', start: 0, end: 10 }, { id: 'p02', start: 10, end: 20 }, { id: 'p03', start: 20, end: 30 },
] };
test('page follows actual audio including exact boundaries and ended position', () => {
  for (const [seconds, page] of [[0,0], [9.99,0], [10,1], [20,2], [30,2], [90,2], [-1,0], [NaN,0]]) {
    assert.equal(getPageIndex(story, seconds), page);
  }
});
test('resume restores exact position or migrates by page when content changes', () => {
  assert.equal(restorePosition(story, {storyId:'a',version:2,pageId:'p02',seconds:14,updatedAt:1}), 14);
  assert.equal(restorePosition(story, {storyId:'a',version:1,pageId:'p02',seconds:14,updatedAt:1}), 10);
  assert.equal(restorePosition(story, {storyId:'b',version:2,pageId:'p02',seconds:14,updatedAt:1}), 0);
  assert.equal(restorePosition(story, {storyId:'a',version:1,pageId:'deleted',seconds:14,updatedAt:1}), 0);
  assert.equal(restorePosition(story, {storyId:'a',version:2,pageId:'p03',seconds:31,updatedAt:1}), 0);
});
test('malformed local data cannot crash catalog or inject invalid saved stories', () => {
  assert.deepEqual(sanitizeLibrary(null).favorites, []);
  const result = sanitizeLibrary({ageBand:'wrong',favorites:['a','a','../missing','constructor',1],progress:{a:{seconds:'oops'}},lastStoryId:'../missing'});
  assert.equal(result.ageBand, 'all');
  assert.deepEqual(result.favorites, ['a']);
  assert.deepEqual(result.progress, {});
  assert.equal(result.lastStoryId, null);
  assert.equal(sanitizeLibrary({ageBand:['all']}).ageBand,'all');
});


test('remote favorites and progress survive a cold offline restart before catalog loading', () => {
  const remoteProgress = { storyId: 'expansion-0042', version: 3, pageId: 'p08', seconds: 123.4, updatedAt: 1000 };
  const stored = JSON.stringify({ ageBand: '6-8', favorites: ['expansion-0042', 'a'], lastStoryId: 'expansion-0042', progress: { 'expansion-0042': remoteProgress } });
  const restored = sanitizeLibrary(JSON.parse(stored));
  assert.deepEqual(restored.favorites, ['expansion-0042', 'a']);
  assert.equal(restored.lastStoryId, 'expansion-0042');
  assert.deepEqual(restored.progress['expansion-0042'], remoteProgress);
  assert.deepEqual(sanitizeLibrary(JSON.parse(JSON.stringify(restored))), restored);
  const remoteStory = { ...story, id: 'expansion-0042', version: 3, duration: 200 };
  assert.equal(restorePosition(remoteStory, restored.progress[remoteStory.id]), 123.4);
});

test('preserved unknown IDs cannot inject malformed progress or prototype keys', () => {
  const valid = { storyId: 'remote', version: 1, pageId: 'p01', seconds: 12, updatedAt: 1 };
  for (const changes of [{ version: 1.5 }, { version: 0 }, { seconds: Infinity }, { seconds: -1 }, { seconds: 7201 }, { updatedAt: NaN }, { updatedAt: -1 }, { pageId: '' }, { storyId: 'mismatch' }]) {
    assert.deepEqual(sanitizeLibrary({ progress: { remote: { ...valid, ...changes } } }).progress, {});
  }
  const poison = JSON.parse('{"favorites":["__proto__","constructor","prototype","safe"],"progress":{"__proto__":{"polluted":true}},"lastStoryId":"constructor"}');
  const result = sanitizeLibrary(poison);
  assert.deepEqual(result.favorites, ['safe']); assert.deepEqual(result.progress, {}); assert.equal(result.lastStoryId, null);
  assert.equal(({} as Record<string, unknown>).polluted, undefined);
});
