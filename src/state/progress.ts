import type { Story, SavedProgress, LibraryData, AgeFilter } from '../content/types';

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
export function sanitizeLibrary(value: unknown, stories: Story[]): LibraryData {
  const input = value && typeof value === 'object' ? value as Record<string, unknown> : {};
  const ids = new Set(stories.map(s => s.id));
  const favorites = Array.isArray(input.favorites) ? [...new Set(input.favorites.filter((id): id is string => typeof id === 'string' && ids.has(id)))] : [];
  const progress: Record<string, SavedProgress> = {};
  if (input.progress && typeof input.progress === 'object') {
    for (const [id, raw] of Object.entries(input.progress)) {
      if (!ids.has(id) || !raw || typeof raw !== 'object') continue;
      const p = raw as SavedProgress;
      if (p.storyId === id && Number.isFinite(p.version) && typeof p.pageId === 'string' && Number.isFinite(p.seconds) && p.seconds >= 0 && Number.isFinite(p.updatedAt)) progress[id] = p;
    }
  }
  const ageBand = typeof input.ageBand === 'string' && ['all','3-5','6-8','9-10'].includes(input.ageBand) ? input.ageBand as AgeFilter : 'all';
  return {ageBand, favorites, progress, lastStoryId: typeof input.lastStoryId === 'string' && ids.has(input.lastStoryId) ? input.lastStoryId : null};
}
