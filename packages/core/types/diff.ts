export interface Difference<T> {
  old: Partial<T>;
  next: Partial<T>;
}

export enum KeyDiffType {
  Update = 1,
  Set,
  Remove,
}

export interface KeyDiffUpdate<T, TColl> extends Difference<T> {
  c: TColl;
  type: KeyDiffType.Update;
  key: number | string;
}

export interface KeyDiffSet<T, TColl> {
  c: TColl;
  type: KeyDiffType.Set;
  key: number | string;
  next: T;
}

export interface KeyDiffRemove<T, TColl> {
  c: TColl;
  type: KeyDiffType.Remove;
  key: number | string;
  old: T;
}

export type KeyDiff<T, TColl> =
  | KeyDiffUpdate<T, TColl>
  | KeyDiffRemove<T, TColl>
  | KeyDiffSet<T, TColl>;
