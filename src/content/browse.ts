import type { AgeFilter, StorySummary } from './types';

export const STORIES_PER_PAGE = 24;
export function browseStories(stories: StorySummary[], options: { ageBand: AgeFilter; query: string; favorites?: readonly string[]; page: number }) {
  const terms = options.query.normalize('NFKC').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const favorites = options.favorites ? new Set(options.favorites) : null;
  const filtered = stories.filter(story => {
    if ((options.ageBand !== 'all' && story.ageBand !== options.ageBand) || (favorites && !favorites.has(story.id))) return false;
    const searchable = [story.title, story.subtitle, story.description, story.theme, story.character].join(' ').normalize('NFKC').toLocaleLowerCase();
    return terms.every(term => searchable.includes(term));
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / STORIES_PER_PAGE));
  const page = Math.max(0, Math.min(Number.isFinite(options.page) ? Math.floor(options.page) : 0, pageCount - 1));
  return { stories: filtered.slice(page * STORIES_PER_PAGE, (page + 1) * STORIES_PER_PAGE), total: filtered.length, page, pageCount };
}
