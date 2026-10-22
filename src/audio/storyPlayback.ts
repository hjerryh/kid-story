import type { SavedProgress, Story } from '../content/types';
import { restorePosition } from '../state/progress';
import type { PlaybackController } from './controller';

type ActiveStory = { current: Story | null };
type PlaybackLibrary = {
  progress: Record<string, SavedProgress>;
  saveProgress: (story: Story, seconds: number) => void;
};

/** Play the reader's exact story version even when its catalog has refreshed. */
export function playLoadedStory(engine: PlaybackController, activeStory: ActiveStory, library: PlaybackLibrary, story: Story, position?: number) {
  if (engine.snapshot.storyId !== story.id || activeStory.current?.version !== story.version || engine.snapshot.error) {
    const previous = activeStory.current, snapshot = engine.snapshot;
    if (previous && snapshot.storyId === previous.id && !snapshot.loading) library.saveProgress(previous, snapshot.position);
    activeStory.current = story;
    engine.select(story, position ?? restorePosition(story, library.progress[story.id]));
  } else if (position !== undefined) void engine.seek(position);
  engine.play();
}
