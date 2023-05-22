import { describe, expect, it } from "vitest";
import { tilePositionToCoordinate, tileBounds } from "../math";

describe("math.test.coords", () => {
  it("Test coordinates", () => {
    const coords0 = tilePositionToCoordinate({ x: 0, y: 0 });
    expect(coords0).toEqual({ x: 182, y: 317 });

    const coords1 = tilePositionToCoordinate({ x: 1, y: 0 });
    expect(coords1).toEqual({ x: 457, y: 158.5 });

    const coords2 = tilePositionToCoordinate({ x: 0, y: 1 });
    expect(coords2).toEqual({ x: 182, y: 634 });
  });

  it("Test bounding box", () => {
    const bb0 = tileBounds({ x: 0, y: 0 });
    expect(bb0).toEqual({ minX: 0, minY: 158.5, maxX: 364, maxY: 475.5 });

    const bb1 = tileBounds({ x: 1, y: 0 });
    expect(bb1).toEqual({ minX: 275, minY: 0, maxX: 639, maxY: 317 });
  });
});
