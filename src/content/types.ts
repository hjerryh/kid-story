import type { ImageSourcePropType } from 'react-native';
export type AgeBand = '3-5' | '6-8' | '9-10';
export type AgeFilter = AgeBand | 'all';
export interface StoryPage { id: string; text: string; image: ImageSourcePropType; start: number; end: number; }
export interface Story {
  id: string; version: number; title: string; subtitle: string; description: string;
  ageBand: AgeBand; theme: string; color: string; character: string;
  duration: number; cover: ImageSourcePropType; audio: number; pages: StoryPage[];
}
export interface SavedProgress { storyId: string; version: number; pageId: string; seconds: number; updatedAt: number; }
export interface LibraryData { ageBand: AgeFilter; favorites: string[]; progress: Record<string, SavedProgress>; lastStoryId: string | null; }
