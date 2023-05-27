import {
  applyDiff,
  applyKeyDiff,
  diff,
  keyRemove,
  keySet,
  keyUpdate,
  removeDiff,
  removeKeyDiff,
} from "../diff_transform";
import { Difference, KeyDiffType } from "../types/diff";
import { describe, it, expect, beforeEach } from "vitest";
import { Position } from "../types/static";

describe("Transform.Test.diff", () => {
  const original: Position = {
    x: 5,
    y: 6,
  };

  it("Find difference, all props", () => {
    const [changes, next]: [Difference<Position>, Position] = diff(original, {
      x: 4,
      y: 3,
    });
    expect(next).toEqual({ x: 4, y: 3 });
    expect(changes).toEqual({ old: { x: 5, y: 6 }, next: { x: 4, y: 3 } });

    const updated = applyDiff(original, changes);
    expect(updated).toEqual({ x: 4, y: 3 });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ x: 5, y: 6 });
  });

  it("Find difference, one prop", () => {
    const [changes, next]: [Difference<Position>, Position] = diff(original, {
      x: 2,
    });
    expect(next).toEqual({ x: 2, y: 6 });
    expect(changes).toEqual({ old: { x: 5 }, next: { x: 2 } });

    const updated = applyDiff(original, changes);
    expect(updated).toEqual({ x: 2, y: 6 });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ x: 5, y: 6 });
  });

  it("Find difference, no prop", () => {
    const [changes, next]: [Difference<Position>, Position] = diff(
      original,
      {}
    );
    expect(next).toEqual({ x: 5, y: 6 });
    expect(changes).toEqual({ old: {}, next: {} });

    const updated = applyDiff(original, changes);
    expect(updated).toEqual({ x: 5, y: 6 });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ x: 5, y: 6 });
  });

  it("Find difference, no changes", () => {
    const [changes, next]: [Difference<Position>, Position] = diff(original, {
      x: 5,
      y: 6,
    });
    expect(next).toEqual({ x: 5, y: 6 });
    expect(changes).toEqual({ old: {}, next: {} });

    const updated = applyDiff(original, changes);
    expect(updated).toEqual({ x: 5, y: 6 });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ x: 5, y: 6 });
  });

  interface NestedPosition {
    p: Position;
  }
  const nestedOriginal: NestedPosition = {
    p: {
      x: 1,
      y: 2,
    },
  };
  it("Find difference, one deep prop", () => {
    const [changes, next] = diff(nestedOriginal, {
      p: { ...nestedOriginal.p, x: 3 },
    });
    expect(next).toEqual({ p: { x: 3, y: 2 } });
    expect(changes).toEqual({
      old: { p: { x: 1, y: 2 } },
      next: { p: { x: 3, y: 2 } },
    });

    const updated = applyDiff(nestedOriginal, changes);
    expect(updated).toEqual({ p: { x: 3, y: 2 } });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ p: { x: 1, y: 2 } });
  });

  it("Find difference, no deep prop", () => {
    const [changes, next] = diff(nestedOriginal, {
      p: { ...nestedOriginal.p, x: 1 },
    });
    expect(next).toEqual({ p: { x: 1, y: 2 } });
    expect(changes).toEqual({ next: {}, old: {} });

    const updated = applyDiff(nestedOriginal, changes);
    expect(updated).toEqual({ p: { x: 1, y: 2 } });

    const reversed = removeDiff(updated, changes);
    expect(reversed).toEqual({ p: { x: 1, y: 2 } });
  });
});

describe("Transform.Test.key", () => {
  let collection: { [key: number]: Position; c: number } = { c: 0 };
  beforeEach(() => {
    collection = {
      3: { x: 5, y: 4 },
      4: { x: 6, y: 7 },
      5: { x: 8, y: 0 },
      c: 0,
    };
  });

  it("KeySet.add.new", () => {
    expect(collection[6]).toBeUndefined();
    const { changes, old } = keySet(collection, 6, 0, { x: 10, y: 11 });
    expect(old).toBeNull();
    expect(collection[6]).toBeDefined();
    expect(changes.key).toBe(6);
    expect(changes.type).toBe(KeyDiffType.Set);
    expect(changes.next).toEqual({ x: 10, y: 11 });

    removeKeyDiff(collection, changes);
    expect(collection[6]).toBeUndefined();
  });

  it("KeySet.add.existing", () => {
    expect(collection[4]).toBeDefined();
    const { changes, old } = keySet(collection, 4, 0, { x: 10, y: 11 });
    expect(old).toEqual({ x: 6, y: 7 });
    expect(changes.key).toBe(4);
    expect(changes.type).toBe(KeyDiffType.Update);
    expect(changes.next).toEqual({ x: 10, y: 11 });

    removeKeyDiff(collection, changes);
    expect(collection[4]).toEqual({ x: 6, y: 7 });
  });

  it("KeySet.update", () => {
    expect(collection[4]).toBeDefined();
    const { changes, old, next } = keyUpdate(collection, 4, 0, { x: 10 });
    if (changes === null) {
      expect(changes).not.toBeNull();
      return;
    }
    expect(old).toEqual({ x: 6, y: 7 });
    expect(next).toEqual({ x: 10, y: 7 });
    expect(changes.key).toBe(4);
    expect(changes.type).toBe(KeyDiffType.Update);
    expect(changes.next).toEqual({ x: 10 });
    expect(changes.old).toEqual({ x: 6 });

    removeKeyDiff(collection, changes);
    expect(collection[4]).toEqual({ x: 6, y: 7 });

    applyKeyDiff(collection, changes);
    expect(collection[4]).toEqual({ x: 10, y: 7 });
  });

  it("KeySet.remove.unknown", () => {
    expect(collection[60]).toBeUndefined();
    const result = keyRemove(collection, 60, 0);
    expect(result).toBeNull();
  });

  it("KeySet.remove.existing", () => {
    expect(collection[4]).toBeDefined();
    const removed = keyRemove(collection, 4, 0);
    if (removed === null) {
      expect(removed).not.toBeNull();
      return;
    }
    expect(removed?.type).toBe(KeyDiffType.Remove);
    expect(removed?.key).toBe(4);
    expect(removed?.old).toEqual({ x: 6, y: 7 });
    expect(collection[4]).toBeUndefined();

    removeKeyDiff(collection, removed);
    expect(collection[4]).toEqual({ x: 6, y: 7 });
  });
});
