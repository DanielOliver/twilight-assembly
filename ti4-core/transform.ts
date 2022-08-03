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

export function keyUpdate<T>(
  collection: { [key: number | string]: T },
  key: number | string,
  value: Partial<T>
):
  | { changes: KeyDiffUpdate<T>; next: T; old: T }
  | { changes: null; next: null; old: null } {
  const existingValue = collection[key];
  if (existingValue) {
    const [changes, next] = diff(existingValue, value);
    collection[key] = next;
    return {
      changes: {
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
  };
}

export function keySet<T>(
  collection: { [key: number | string]: T },
  key: number | string,
  value: T
): { changes: KeyDiffSet<T> | KeyDiffUpdate<T>; old: T | null } {
  const existingValue = collection[key];
  collection[key] = value;
  if (existingValue) {
    const [changes, _] = diff(existingValue, value);
    return {
      changes: {
        type: KeyDiffType.Update,
        key: key,
        ...changes,
      },
      old: existingValue,
    };
  }
  return {
    changes: {
      type: KeyDiffType.Set,
      key: key,
      next: value,
    },
    old: null,
  };
}

export function keyRemove<T>(
  collection: { [key: number | string]: T },
  key: number | string
): KeyDiffRemove<T> | null {
  const existingValue = collection[key];
  delete collection[key];
  if (existingValue) {
    return {
      type: KeyDiffType.Remove,
      key: key,
      old: existingValue,
    };
  }
  return null;
}

export function applyKeyDiff<T>(
  collection: { [key: number | string]: T },
  operation: KeyDiff<T>
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

export function removeKeyDiff<T>(
  collection: { [key: number | string]: T },
  operation: KeyDiff<T>
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