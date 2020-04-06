type release = (releaseCallback?: () => void) => () => void;
type exec = (release: release) => void;
interface ILock {
  (key: string | string[], exec: exec): void;
  isLocked(): boolean;
}

interface IAsyncLock {
  (key: string | string[], exec: exec): Object;
}

export function Lock(): ILock;
export function AsyncLock(): IAsyncLock;