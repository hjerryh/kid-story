import type { AgeBand, Story, StoryPage, StorySummary } from './types';
import { validStoryId } from './identifiers';
export { validStoryId } from './identifiers';

export interface RemoteStorySummary extends StorySummary { detailUrl: string; }
type JsonObject = Record<string, unknown>;
type FetchJson = (url: string) => Promise<unknown>;

function object(value: unknown): JsonObject {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('故事资料格式不正确');
  return value as JsonObject;
}
function text(value: unknown, maximum: number): string {
  if (typeof value !== 'string' || !value.trim() || value.length > maximum) throw new Error('故事文字资料不完整');
  return value;
}
function number(value: unknown, minimum: number, maximum: number, integer = false): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum || value > maximum || (integer && !Number.isInteger(value))) throw new Error('故事时间资料不正确');
  return value;
}
function age(value: unknown): AgeBand {
  if (value !== '3-5' && value !== '6-8' && value !== '9-10') throw new Error('故事年龄资料不正确');
  return value;
}

/** Reject traversal before URL normalization, including encoded or backslash paths. */
export function libraryUrl(value: unknown, origin: string): string {
  const resource = text(value, 1000), base = new URL(origin);
  if (!/^https?:$/.test(base.protocol)) throw new Error('故事资源地址不正确');
  const path = resource.startsWith(`${base.origin}/`) ? resource.slice(base.origin.length) : resource;
  if (!/^\/library\/[a-zA-Z0-9/_.-]+$/.test(path) || path.endsWith('/') || path.includes('//') || path.split('/').some(part => part === '.' || part === '..')) throw new Error('故事资源地址不正确');
  return `${base.origin}${path}`;
}

function metadata(value: JsonObject, origin: string): StorySummary {
  if (!validStoryId(value.id) || value.status !== 'media-ready') throw new Error('故事尚未准备好');
  const description = text(value.description, 1000), color = text(value.color, 9);
  if (!/^#[0-9a-f]{6}$/i.test(color)) throw new Error('故事颜色格式不正确');
  return {
    id: value.id, version: number(value.version, 1, 100000, true), title: text(value.title, 120),
    subtitle: value.subtitle === undefined ? description : text(value.subtitle, 300), description,
    ageBand: age(value.ageBand), theme: text(value.theme, 100), color,
    character: value.character === undefined ? '' : text(value.character, 300),
    duration: number(value.duration, 1, 7200), pageCount: number(value.pageCount, 1, 100, true),
    cover: { uri: libraryUrl(value.cover, origin) },
  };
}

export function parseRemoteIndex(raw: unknown, origin: string): RemoteStorySummary[] {
  const input = object(raw);
  if (input.schemaVersion !== 1 || !Array.isArray(input.stories) || input.stories.length > 10000) throw new Error('故事目录格式不正确');
  const ids = new Set<string>(), entries: RemoteStorySummary[] = [];
  for (const candidate of input.stories) {
    const value = object(candidate);
    // Drafts are never visible, even when accidentally included in a public index.
    if (value.status !== 'media-ready') continue;
    const entry = { ...metadata(value, origin), detailUrl: libraryUrl(value.detailUrl, origin) };
    if (ids.has(entry.id)) throw new Error('故事目录中出现了重复条目');
    ids.add(entry.id); entries.push(entry);
  }
  return entries;
}

export function parseRemoteStory(raw: unknown, summary: RemoteStorySummary, origin: string): Story {
  const input = object(raw), meta = metadata(input, origin);
  const fields = ['id', 'version', 'title', 'subtitle', 'description', 'ageBand', 'theme', 'color', 'duration', 'pageCount'] as const;
  if (fields.some(field => meta[field] !== summary[field]) || JSON.stringify(meta.cover) !== JSON.stringify(summary.cover)) throw new Error('故事版本已更新，请刷新目录后再试');
  if (!Array.isArray(input.pages) || input.pages.length !== meta.pageCount) throw new Error('故事页数不完整');
  const ids = new Set<string>();
  let previousEnd = 0;
  const pages: StoryPage[] = input.pages.map(candidate => {
    const page = object(candidate), id = text(page.id, 80);
    if (!validStoryId(id) || ids.has(id)) throw new Error('故事页码不正确');
    ids.add(id);
    const start = number(page.start, 0, meta.duration), end = number(page.end, 0, meta.duration);
    // Allow only floating-point rounding noise; no gaps or overlapping pages.
    if (end <= start || Math.abs(start - previousEnd) > .000001) throw new Error('故事播放时间不连续');
    previousEnd = end;
    return { id, text: text(page.text, 5000), image: { uri: libraryUrl(page.image, origin) }, start, end };
  });
  if (Math.abs(previousEnd - meta.duration) > .000001) throw new Error('故事音频资料不完整');
  return { ...meta, audio: { uri: libraryUrl(input.audio, origin) }, pages };
}

export async function fetchLibraryJson(url: string): Promise<unknown> {
  const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: 'error' });
    // A redirect must not turn an allowed catalog URL into an external request.
    if (response.url && libraryUrl(response.url, new URL(url).origin) !== response.url) throw new Error('故事资源地址不正确');
    if (!response.ok) throw new Error(`故事下载失败（${response.status}）`);
    return await response.json();
  } finally { clearTimeout(timeout); }
}

/** The index contains only cards; a story is downloaded on its first open. */
export class StoryRepository {
  private remote: RemoteStorySummary[] = [];
  private loaded = new Map<string, Story>();
  private pending = new Map<string, Promise<Story>>();
  private refreshGeneration = 0;
  constructor(private bundled: Story[], readonly origin: string, private fetchJson: FetchJson = fetchLibraryJson) {}
  get summaries(): StorySummary[] { return [...this.bundled, ...this.remote]; }
  getSummary(id: string | null): StorySummary | undefined { return this.summaries.find(story => story.id === id) ?? this.getLoaded(id); }
  getLoaded(id: string | null): Story | undefined {
    const bundled = this.bundled.find(story => story.id === id);
    if (bundled) return bundled;
    const summary = this.remote.find(story => story.id === id);
    if (summary) return this.loaded.get(`${summary.id}:${summary.version}`);
    // A refreshed directory does not evict a story already open in this session.
    return Array.from(this.loaded.values()).reverse().find(story => story.id === id);
  }
  replaceIndex(raw: unknown): void {
    const next = parseRemoteIndex(raw, this.origin), bundledIds = new Set(this.bundled.map(story => story.id));
    this.remote = next.filter(story => !bundledIds.has(story.id));
  }
  async refresh(): Promise<unknown> {
    const generation = ++this.refreshGeneration;
    const raw = await this.fetchJson(libraryUrl('/library/index.json', this.origin));
    if (generation === this.refreshGeneration) this.replaceIndex(raw);
    return raw;
  }
  load(id: string): Promise<Story> {
    const loaded = this.getLoaded(id);
    if (loaded) return Promise.resolve(loaded);
    const summary = this.remote.find(story => story.id === id);
    if (!summary) return Promise.reject(new Error('这个故事暂时不在目录中，请刷新后再试'));
    const key = `${id}:${summary.version}`, pending = this.pending.get(key);
    if (pending) return pending;
    const request = Promise.resolve().then(() => this.fetchJson(summary.detailUrl)).then(raw => {
      const story = parseRemoteStory(raw, summary, this.origin);
      this.loaded.set(key, story); return story;
    }).finally(() => { this.pending.delete(key); });
    this.pending.set(key, request); return request;
  }
}
