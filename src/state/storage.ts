export function createWriteQueue(write: (value: string) => Promise<void>) {
  let previous = Promise.resolve();
  return (value: string) => { previous = previous.catch(() => {}).then(() => write(value)); return previous; };
}
