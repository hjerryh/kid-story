/** Stable IDs can be saved before an online catalog has been downloaded. */
export const validStoryId = (value: unknown): value is string =>
  typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,79}$/.test(value) && !['constructor', 'prototype'].includes(value);
