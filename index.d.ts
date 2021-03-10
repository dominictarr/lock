type release = (releaseCallback?: () => void) => () => void;
type exec = (release: release) => void;
interface ILock {
  (key: string | string[], exec: exec): void;
  isLocked(key: string): boolean;
}
export function Lock(): ILock;
