const HexDefaultWidth = 364.0;
const HexDefaultHeight = 317.0;
// const HexMagicY = 0.87;
const HexMagicY = 0.7555;

class Vec2f {
  x: number = 0;
  y: number = 0;
}
class Axial2 {
  q: number = 0;
  r: number = 0;

  public get s(): number {
    return -this.q - this.r;
  }
}

interface BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

const tilePositionToCoordinate: (position: { x: number; y: number }) => {
  x: number;
  y: number;
} = (position: { x: number; y: number }) => {
  const xOffset = (position.x * HexMagicY + 0.5) * HexDefaultWidth;
  const yOffset =
    (position.x % 2 == 0 ? 1 + position.y : 0.5 + position.y) *
    HexDefaultHeight;

  return {
    x: Math.round(100 * xOffset) / 100,
    y: Math.round(100 * yOffset) / 100,
  };
};

const tileBounds: (position: {
  x: number;
  y: number;
}) => BoundingBox = (position: { x: number; y: number }) => {
  const minX = position.x * HexMagicY * HexDefaultWidth;
  const maxX = (position.x * HexMagicY + 1) * HexDefaultWidth;
  const minY =
    (position.x % 2 == 0 ? 0.5 + position.y : position.y) * HexDefaultHeight;
  const maxY =
    (position.x % 2 == 0 ? 1.5 + position.y : 1 + position.y) *
    HexDefaultHeight;

  return {
    minX: Math.round(100 * minX) / 100,
    minY: Math.round(100 * minY) / 100,
    maxX: Math.round(100 * maxX) / 100,
    maxY: Math.round(100 * maxY) / 100,
  };
};

const expandBoundingBox: (
  one: BoundingBox,
  two: BoundingBox | number
) => BoundingBox = (one, two) => {
  if (typeof two === "number") {
    return {
      minX: one.minX - two,
      minY: one.minY - two,
      maxX: one.maxX + two,
      maxY: one.maxY + two,
    };
  }

  return {
    minX: Math.min(one.minX, two.minX),
    minY: Math.min(one.minY, two.minY),
    maxX: Math.max(one.maxX, two.maxX),
    maxY: Math.max(one.maxY, two.maxY),
  };
};

export type { BoundingBox };

export {
  HexMagicY,
  HexDefaultWidth,
  HexDefaultHeight,
  tilePositionToCoordinate,
  tileBounds,
  expandBoundingBox,
};
