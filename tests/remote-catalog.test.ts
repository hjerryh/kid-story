import test from 'node:test';
import assert from 'node:assert/strict';
import { libraryUrl, parseRemoteIndex, parseRemoteStory, StoryRepository } from '../src/content/remote';
import { browseStories } from '../src/content/browse';
import type { Story } from '../src/content/types';
import { PlaybackController, type PlayerStatus } from '../src/audio/controller';
import { playLoadedStory } from '../src/audio/storyPlayback';

const origin = 'https://kid-store.jentin.cn';
const summary = (id = 'expansion-0001', version = 1) => ({
  id, version, status: 'media-ready', title: '小兔子的雨伞', subtitle: '雨天里的一个约定',
  description: '小兔子在雨天为好朋友送伞。', ageBand: '3-5', theme: '友谊', color: '#AABBCC',
  pageCount: 2, duration: 30, cover: `/library/stories/${id}/v${version}/cover.webp`,
  detailUrl: `/library/stories/${id}/v${version}/story.json`,
});
const detail = (id = 'expansion-0001', version = 1) => ({
  ...summary(id, version), audio: `/library/stories/${id}/v${version}/audio.mp3`,
  pages: [
    { id: 'p01', text: '雨点落在小兔子的伞上。', image: `/library/stories/${id}/v${version}/p01.webp`, start: 0, end: 12.5 },
    { id: 'p02', text: '小兔子和小熊一起回了家。', image: `/library/stories/${id}/v${version}/p02.webp`, start: 12.5, end: 30 },
  ],
});
const index = (...stories: unknown[]) => ({ schemaVersion: 1, stories });
const bundled: Story = { ...parseRemoteStory(detail('bundled-one'), parseRemoteIndex(index(summary('bundled-one')), origin)[0], origin), audio: 7, cover: 8 };

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

test('library paths stay under the same origin before and after normalization', () => {
  assert.equal(libraryUrl('/library/index.json', origin), `${origin}/library/index.json`);
  assert.equal(libraryUrl(`${origin}/library/stories/a/v1/story.json`, origin), `${origin}/library/stories/a/v1/story.json`);
  for (const value of [
    '/other/index.json', '/library/../secret.json', '/library/./index.json', '/library/a/../../library/index.json',
    '/library/%2e%2e/secret.json', '/library/a%2fb.json', '/library/a%5cb.json', '/library/%252e%252e/index.json',
    '/library/a\\b.json', '/library/index.json?next=https://other.test', '/library/index.json#part',
    '//other.test/library/index.json', 'https://other.test/library/index.json', 'http://kid-store.jentin.cn/library/index.json',
    'https://kid-store.jentin.cn@other.test/library/index.json', 'https://kid-store.jentin.cn.evil.test/library/index.json',
    'data:application/json,{}', '/library//index.json', 'library/index.json', '/library/index.json\n', '/library/',
  ]) assert.throws(() => libraryUrl(value, origin), `accepted ${JSON.stringify(value)}`);
});

test('index accepts media-ready cards but rejects duplicate IDs and invalid metadata', () => {
  const cards = parseRemoteIndex(index(summary(), { id: 'draft', status: 'text-ready' }), origin);
  assert.equal(cards.length, 1);
  assert.equal(cards[0].detailUrl, `${origin}/library/stories/expansion-0001/v1/story.json`);
  assert.equal('pages' in cards[0], false);
  assert.throws(() => parseRemoteIndex(index(summary(), summary()), origin));
  assert.throws(() => parseRemoteIndex({ schemaVersion: 2, stories: [] }, origin));
  for (const change of [
    { id: '__proto__' }, { id: 'constructor' }, { version: NaN }, { version: 1.5 }, { duration: Infinity },
    { duration: 0 }, { pageCount: 2.5 }, { ageBand: '11-12' }, { color: 'red' }, { title: '' },
    { cover: 'https://other.test/library/cover.webp' }, { detailUrl: '/library/../../story.json' },
  ]) assert.throws(() => parseRemoteIndex(index({ ...summary(), ...change }), origin));
});

test('details must match their selected version and have a complete contiguous timeline', () => {
  const card = parseRemoteIndex(index(summary()), origin)[0];
  const valid = parseRemoteStory(detail(), card, origin);
  assert.equal(valid.pages[1].start, 12.5);
  assert.deepEqual(valid.audio, { uri: `${origin}/library/stories/expansion-0001/v1/audio.mp3` });
  for (const change of [{ version: 2 }, { id: 'other' }, { duration: 31 }, { pageCount: 3 }, { title: '另一篇故事' }, { audio: '/audio.mp3' }]) {
    assert.throws(() => parseRemoteStory({ ...detail(), ...change }, card, origin));
  }
  const badPages = [
    [{ start: .1 }, {}], [{ end: 12.6 }, {}], [{ end: 12.4 }, {}], [{ end: 0 }, {}],
    [{ start: NaN }, {}], [{}, { end: 29.5 }], [{}, { id: 'p01' }], [{}, { image: '/library/../other.webp' }],
    [{}, { text: '' }],
  ];
  for (const patches of badPages) {
    const value = detail();
    value.pages = value.pages.map((page, i) => ({ ...page, ...patches[i] }));
    assert.throws(() => parseRemoteStory(value, card, origin), JSON.stringify(patches));
  }
  assert.throws(() => parseRemoteStory({ ...detail(), pages: [] }, card, origin));
});

test('opening the catalog does not fetch details; simultaneous opens share one request', async () => {
  const calls: string[] = [], storyRequest = deferred<unknown>();
  const repository = new StoryRepository([bundled], origin, async url => {
    calls.push(url);
    return url.endsWith('/index.json') ? index(summary()) : storyRequest.promise;
  });
  await repository.refresh();
  assert.equal(repository.summaries.length, 2);
  assert.deepEqual(calls, [`${origin}/library/index.json`]);
  assert.equal(repository.getLoaded('expansion-0001'), undefined);
  assert.equal(await repository.load('bundled-one'), bundled);
  const first = repository.load('expansion-0001'), second = repository.load('expansion-0001');
  assert.equal(first, second);
  storyRequest.resolve(detail());
  const opened = await first;
  assert.equal(opened, await second);
  assert.equal(opened, await repository.load('expansion-0001'));
  assert.equal(calls.length, 2);
});

test('failed details can be retried and a failed refresh keeps available stories', async () => {
  let detailAttempts = 0, offline = false;
  const repository = new StoryRepository([bundled], origin, async url => {
    if (offline) throw new Error('offline');
    if (url.endsWith('/index.json')) return index(summary());
    if (++detailAttempts === 1) throw new Error('temporary failure');
    return detail();
  });
  await repository.refresh();
  await assert.rejects(repository.load('expansion-0001'));
  assert.equal(repository.getLoaded('expansion-0001'), undefined);
  const loaded = await repository.load('expansion-0001');
  assert.equal(detailAttempts, 2);
  offline = true;
  await assert.rejects(repository.refresh());
  assert.equal(repository.summaries.length, 2);
  assert.equal(await repository.load('expansion-0001'), loaded);
  assert.equal(await repository.load('bundled-one'), bundled);
});

test('a malformed detail response is not cached, allowing a corrected retry', async () => {
  let attempt = 0;
  const repository = new StoryRepository([], origin, async () => ++attempt === 1 ? { ...detail(), pages: [] } : detail());
  repository.replaceIndex(index(summary()));
  await assert.rejects(repository.load('expansion-0001'));
  assert.equal((await repository.load('expansion-0001')).pages.length, 2);
  assert.equal(attempt, 2);
});

test('a slow old catalog response cannot overwrite a newer catalog', async () => {
  const first = deferred<unknown>(), second = deferred<unknown>();
  let calls = 0;
  const repository = new StoryRepository([], origin, () => ++calls === 1 ? first.promise : second.promise);
  const older = repository.refresh(), newer = repository.refresh();
  second.resolve(index(summary('new-story'))); await newer;
  first.resolve(index(summary('old-story'))); await older;
  assert.deepEqual(repository.summaries.map(story => story.id), ['new-story']);
});

test('new versions load fresh details while missing catalogs do not evict an opened story', async () => {
  let version = 1, calls = 0;
  const repository = new StoryRepository([bundled], origin, async () => { calls++; return detail('expansion-0001', version); });
  repository.replaceIndex(index(summary(), summary('bundled-one')));
  assert.equal(repository.summaries.length, 2);
  const first = await repository.load('expansion-0001');
  version = 2;
  repository.replaceIndex(index(summary('expansion-0001', 2)));
  assert.equal(repository.getLoaded('expansion-0001'), undefined);
  const second = await repository.load('expansion-0001');
  assert.notEqual(first, second);
  assert.equal(second.version, 2); assert.equal(calls, 2);
  repository.replaceIndex(index());
  assert.equal(await repository.load('expansion-0001'), second);
  await assert.rejects(repository.load('missing-story'));
});

test('a reader can play its delayed old version and retry it after a newer catalog version loads', async () => {
  const firstDetail = deferred<unknown>();
  const repository = new StoryRepository([], origin, url => url.includes('/v1/') ? firstDetail.promise : Promise.resolve(detail('expansion-0001', 2)));
  repository.replaceIndex(index(summary()));
  const opening = repository.load('expansion-0001');
  repository.replaceIndex(index(summary('expansion-0001', 2)));
  firstDetail.resolve(detail());
  const displayed = await opening;
  assert.equal(displayed.version, 1);
  assert.equal(repository.getSummary(displayed.id)?.version, 2);
  assert.equal(repository.getLoaded(displayed.id), undefined);

  const selections: Story[] = [], played: Story[] = [], saved: { story: Story; seconds: number }[] = [];
  let reportStatus!: (status: PlayerStatus) => void;
  const engine = new PlaybackController((story, listener) => {
    selections.push(story); reportStatus = listener;
    queueMicrotask(() => listener({ loaded: true, playing: false, position: 0, duration: story.duration, ended: false }));
    return { play: () => { played.push(story); }, pause: () => {}, seek: async () => {}, dispose: () => {} };
  });
  const active = { current: null as Story | null };
  const library = { progress: {}, saveProgress: (story: Story, seconds: number) => { saved.push({ story, seconds }); } };
  const settle = () => new Promise<void>(resolve => setImmediate(resolve));
  try {
    playLoadedStory(engine, active, library, displayed, 18);
    await settle();
    assert.equal(played[0], displayed);
    assert.equal(engine.snapshot.position, 18);
    assert.equal(active.current, displayed);

    const newer = await repository.load(displayed.id);
    assert.equal(newer.version, 2);
    reportStatus({ loaded: true, playing: false, position: 18, duration: displayed.duration, ended: false, error: 'temporary audio failure' });
    playLoadedStory(engine, active, library, active.current!, engine.snapshot.position);
    await settle();
    assert.deepEqual(selections, [displayed, displayed]);
    assert.deepEqual(played, [displayed, displayed]);
    assert.deepEqual(saved, [{ story: displayed, seconds: 18 }]);
    assert.equal(engine.snapshot.position, 18);
    assert.equal(engine.snapshot.error, null);
    assert.deepEqual(active.current?.audio, displayed.audio);
  } finally { engine.dispose(); }
});

test('a thousand-story shelf renders at most 24 cards with combined search and age filters', () => {
  const stories = Array.from({ length: 1006 }, (_, i) => ({ ...bundled, id: `story-${i}`, title: i % 2 ? `小熊的雨伞 ${i}` : `月亮城 ${i}`, ageBand: i % 2 ? '6-8' as const : '3-5' as const }));
  const first = browseStories(stories, { ageBand: 'all', query: '', page: 0 });
  assert.equal(first.stories.length, 24); assert.equal(first.total, 1006); assert.equal(first.pageCount, 42);
  const last = browseStories(stories, { ageBand: 'all', query: '', page: 999 });
  assert.equal(last.page, 41); assert.equal(last.stories.length, 22);
  const result = browseStories(stories, { ageBand: '6-8', query: ' 小熊 雨伞 ', page: 0, favorites: ['story-1', 'story-2', 'story-3'] });
  assert.deepEqual(result.stories.map(story => story.id), ['story-1', 'story-3']);
  const empty = browseStories(stories, { ageBand: '9-10', query: 'none', page: NaN });
  assert.equal(empty.total, 0); assert.equal(empty.page, 0); assert.equal(empty.pageCount, 1);
});
