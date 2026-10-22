import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stories } from './catalog';
import { StoryRepository } from './remote';
import { createWriteQueue } from '../state/storage';
import type { Story, StorySummary } from './types';

type CatalogValue = {
  stories: StorySummary[]; loading: boolean; error: string | null;
  refresh: () => Promise<void>; loadStory: (id: string) => Promise<Story>;
  findSummary: (id: string | null) => StorySummary | undefined;
  findLoadedStory: (id: string | null) => Story | undefined;
};
const Context = createContext<CatalogValue | null>(null);
const origin = Platform.OS === 'web' && typeof window !== 'undefined' ? window.location.origin : 'https://kid-store.jentin.cn';
const cacheKey = `story-island.catalog.v1:${origin}`;

export function StoryCatalogProvider({ children }: { children: React.ReactNode }) {
  const repositoryRef = useRef<StoryRepository | null>(null);
  if (!repositoryRef.current) repositoryRef.current = new StoryRepository(stories, origin);
  const repository = repositoryRef.current;
  const [catalog, setCatalog] = useState(repository.summaries), [loading, setLoading] = useState(true), [error, setError] = useState<string | null>(null);
  const mounted = useRef(false), refreshId = useRef(0);
  const writeCache = useRef(createWriteQueue(value => AsyncStorage.setItem(cacheKey, value))).current;
  const refresh = useCallback(async () => {
    const request = ++refreshId.current;
    setLoading(true); setError(null);
    try {
      const raw = await repository.refresh();
      if (!mounted.current || request !== refreshId.current) return;
      setCatalog(repository.summaries);
      void writeCache(JSON.stringify(raw)).catch(() => {});
    } catch {
      if (mounted.current && request === refreshId.current) setError('暂时连不上故事库，收藏和阅读进度会为你保留。');
    } finally { if (mounted.current && request === refreshId.current) setLoading(false); }
  }, [repository, writeCache]);
  useEffect(() => {
    mounted.current = true;
    let live = true;
    const request = refreshId.current;
    void (async () => {
      try {
        const cached = await AsyncStorage.getItem(cacheKey);
        if (!live || request !== refreshId.current) return;
        if (cached) { repository.replaceIndex(JSON.parse(cached)); setCatalog(repository.summaries); }
      } catch { /* A damaged cache never prevents the bundled library from opening. */ }
      if (live && request === refreshId.current) void refresh();
    })();
    return () => { live = false; mounted.current = false; refreshId.current++; };
  }, [refresh, repository]);
  const loadStory = useCallback((id: string) => repository.load(id), [repository]);
  const findSummary = useCallback((id: string | null) => repository.getSummary(id), [repository]);
  const findLoadedStory = useCallback((id: string | null) => repository.getLoaded(id), [repository]);
  return <Context.Provider value={{ stories: catalog, loading, error, refresh, loadStory, findSummary, findLoadedStory }}>{children}</Context.Provider>;
}
export function useStoryCatalog() {
  const value = useContext(Context);
  if (!value) throw new Error('StoryCatalogProvider is required');
  return value;
}
