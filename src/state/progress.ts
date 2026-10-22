import type { Story, SavedProgress, LibraryData, AgeFilter } from '../content/types';
import { validStoryId } from '../content/identifiers';

export function getPageIndex(story: Story, seconds: number): number {
  const position = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const index = story.pages.findIndex(page => position < page.end);
  return index < 0 ? Math.max(0, story.pages.length - 1) : index;
}
export function restorePosition(story: Story, progress?: SavedProgress): number {
  if (!progress || progress.storyId !== story.id) return 0;
  if (progress.version !== story.version) return story.pages.find(page => page.id === progress.pageId)?.start ?? 0;
  if (!Number.isFinite(progress.seconds) || progress.seconds < 0 || progress.seconds >= story.duration - .25) return 0;
  return progress.seconds;
}
export function sanitizeLibrary(value: unknown): LibraryData {
  const input = value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
  // Remote IDs must survive startup and failed catalog downloads. Their existence
  // is checked when opening a story, never while restoring the user's own data.
  const favorites = Array.isArray(input.favorites) ? [...new Set(input.favorites.filter(validStoryId))].slice(0, 10000) : [];
  const progress: Record<string, SavedProgress> = {};
  if (input.progress && typeof input.progress === 'object' && !Array.isArray(input.progress)) {
    for (const [id, raw] of Object.entries(input.progress).slice(0, 10000)) {
      if (!validStoryId(id) || !raw || typeof raw !== 'object' || Array.isArray(raw)) continue;
      const p = raw as SavedProgress;
      if (p.storyId !== id || !Number.isInteger(p.version) || p.version < 1 || p.version > 100000 || !validStoryId(p.pageId) || !Number.isFinite(p.seconds) || p.seconds < 0 || p.seconds > 7200 || !Number.isFinite(p.updatedAt) || p.updatedAt < 0 || p.updatedAt > Number.MAX_SAFE_INTEGER) continue;
      progress[id] = { storyId: id, version: p.version, pageId: p.pageId, seconds: p.seconds, updatedAt: p.updatedAt };
    }
  }
  const ageBand = typeof input.ageBand === 'string' && ['all','3-5','6-8','9-10'].includes(input.ageBand) ? input.ageBand as AgeFilter : 'all';
  return {ageBand, favorites, progress, lastStoryId: validStoryId(input.lastStoryId) ? input.lastStoryId : null};
}
