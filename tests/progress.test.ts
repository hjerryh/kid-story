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
  assert.deepEqual(sanitizeLibrary(null, [story]).favorites, []);
  const result = sanitizeLibrary({ageBand:'wrong',favorites:['a','a','missing',1],progress:{a:{seconds:'oops'}},lastStoryId:'missing'}, [story]);
  assert.equal(result.ageBand, 'all');
  assert.deepEqual(result.favorites, ['a']);
  assert.deepEqual(result.progress, {});
  assert.equal(result.lastStoryId, null);
  assert.equal(sanitizeLibrary({ageBand:['all']},[story]).ageBand,'all');
});
