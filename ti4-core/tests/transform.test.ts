import { applyDiff, diff, removeDiff } from "../transform";
import { Difference, Position } from "../types"

describe('Transform.Test', () => {
    const original: Position = {
        x: 5,
        y: 6
    };

    it('Find difference, all props', () => {
        const [changes, next]: [Difference<Position>, Position] = diff(original, { x: 4, y: 3 });
        expect(next).toEqual({ x: 4, y: 3 });
        expect(changes).toEqual({ old: { x: 5, y: 6 }, next: { x: 4, y: 3 } });

        const updated = applyDiff(original, changes);
        expect(updated).toEqual({ x: 4, y: 3 });

        const reversed = removeDiff(updated, changes);
        expect(reversed).toEqual({ x: 5, y: 6 });
    })

    it('Find difference, one prop', () => {
        const [changes, next]: [Difference<Position>, Position] = diff(original, { x: 2 });
        expect(next).toEqual({ x: 2, y: 6 });
        expect(changes).toEqual({ old: { x: 5 }, next: { x: 2 } });

        const updated = applyDiff(original, changes);
        expect(updated).toEqual({ x: 2, y: 6 });

        const reversed = removeDiff(updated, changes);
        expect(reversed).toEqual({ x: 5, y: 6 });
    })

    it('Find difference, no prop', () => {
        const [changes, next]: [Difference<Position>, Position] = diff(original, {});
        expect(next).toEqual({ x: 5, y: 6 });
        expect(changes).toEqual({ old: {}, next: {} });

        const updated = applyDiff(original, changes);
        expect(updated).toEqual({ x: 5, y: 6 });

        const reversed = removeDiff(updated, changes);
        expect(reversed).toEqual({ x: 5, y: 6 });
    })

    it('Find difference, no changes', () => {
        const [changes, next]: [Difference<Position>, Position] = diff(original, { x: 5, y: 6 });
        expect(next).toEqual({ x: 5, y: 6 });
        expect(changes).toEqual({ old: {}, next: {} });

        const updated = applyDiff(original, changes);
        expect(updated).toEqual({ x: 5, y: 6 });

        const reversed = removeDiff(updated, changes);
        expect(reversed).toEqual({ x: 5, y: 6 });
    })
})
