import {
  Difference,
  KeyDiff,
  KeyDiffRemove,
  KeyDiffSet,
  KeyDiffType,
  KeyDiffUpdate,
} from "./types";
import equal from "deep-equal";

export function diff<T>(original: T, props: Partial<T>): [Difference<T>, T] {
  const result: Difference<T> = {
    next: props,
    old: {},
  };
  let assignments = 0;
  for (const key in props) {
    if (equal(original[key], props[key])) {
      delete result.next[key];
    } else {
      assignments++;
      result.old[key] = original[key];
    }
  }
  if (assignments === 0) {
    return [result, original];
  }
  return [result, Object.assign({}, original, props)];
}

export function applyDiff<T>(original: T, diff: Difference<T>): T {
  return Object.assign({}, original, diff.next);
}

export function removeDiff<T>(original: T, diff: Difference<T>): T {
  return Object.assign({}, original, diff.old);
}

export function keyUpdate<T, TColl = number>(
  collection: { [key: number]: T },
  key: number,
  c: TColl,
  value: Partial<T>
):
  | { changes: KeyDiffUpdate<T, TColl>; next: T; old: T }
  | { changes: null; next: null; old: null; c: TColl } {
  const existingValue = collection[key];
  if (existingValue) {
    const [changes, next] = diff(existingValue, value);
    collection[key] = next;
    return {
      changes: {
        c,
        type: KeyDiffType.Update,
        key: key,
        ...changes,
      },
      next,
      old: existingValue,
    };
  }
  return {
    changes: null,
    next: null,
    old: null,
    c,
  };
}

export function keySet<T, TColl = number>(
  collection: { [key: number]: T },
  key: number,
  c: TColl,
  value: T
): { changes: KeyDiffSet<T, TColl> | KeyDiffUpdate<T, TColl>; old: T | null } {
  const existingValue = collection[key];
  collection[key] = value;
  if (existingValue) {
    const [changes, _] = diff(existingValue, value);
    return {
      changes: {
        c,
        type: KeyDiffType.Update,
        key: key,
        ...changes,
      },
      old: existingValue,
    };
  }
  return {
    changes: {
      c,
      type: KeyDiffType.Set,
      key: key,
      next: value,
    },
    old: null,
  };
}

export function keyRemove<T, TColl = number>(
  collection: { [key: number]: T },
  key: number,
  c: TColl
): KeyDiffRemove<T, TColl> | null {
  const existingValue = collection[key];
  delete collection[key];
  if (existingValue) {
    return {
      c,
      type: KeyDiffType.Remove,
      key: key,
      old: existingValue,
    };
  }
  return null;
}

export function applyKeyDiff<T, TColl = number>(
  collection: { [key: number | string]: T },
  operation: KeyDiff<T, TColl>
) {
  switch (operation.type) {
    case KeyDiffType.Remove:
      delete collection[operation.key];
      break;
    case KeyDiffType.Set:
      collection[operation.key] = operation.next;
      break;
    case KeyDiffType.Update:
      collection[operation.key] = applyDiff(
        collection[operation.key],
        operation
      );
      break;
    default:
      break;
  }
}

export function removeKeyDiff<T, TColl = number>(
  collection: { [key: number | string]: T },
  operation: KeyDiff<T, TColl>
) {
  switch (operation.type) {
    case KeyDiffType.Remove:
      collection[operation.key] = operation.old;
      break;
    case KeyDiffType.Set:
      delete collection[operation.key];
      break;
    case KeyDiffType.Update:
      collection[operation.key] = removeDiff(
        collection[operation.key],
        operation
      );
      break;
    default:
      break;
  }
}

export function values<T>(collection: { [key: number]: T }): T[] {
  return Object.values(collection).filter((x) => typeof x === "object");
}
