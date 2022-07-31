import { Difference } from "./types";

export function diff<T>(original: T, props: Partial<T>): [Difference<T>, T] {
    const result: Difference<T> = {
        next: props,
        old: {}
    };
    let assignments = 0;
    for (const key in props) {
        if(original[key] === props[key]) {
          delete result.next[key]
        } else {
          assignments++;
          result.old[key] = original[key];
        }
    }
    if (assignments === 0) {
      return [result, original];
    }
    return [result, Object.assign({}, original, props) ];
}

export function applyDiff<T>(original: T, diff: Difference<T> ): T {
  return Object.assign({}, original, diff.next);
}

export function removeDiff<T>(original: T, diff: Difference<T> ): T {
  return Object.assign({}, original, diff.old);
}
