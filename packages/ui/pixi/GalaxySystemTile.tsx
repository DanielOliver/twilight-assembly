import { Sprite } from "@pixi/react";
import { Position } from "@twilight-assembly/core";
import * as React from "react";

export const GalaxySystemTile = (props: {
  systemId: number;
  position: Position;
}) => {
  const pxTileWidth = 364;
  const pxTileHeight = 317;
  const hexMagicY = 0.7555;
  const xOffset = (props.position.x * hexMagicY + 0.5) * pxTileWidth;
  const yOffset =
    (props.position.x % 2 == 0
      ? 1 + props.position.y
      : 0.5 + props.position.y) * pxTileHeight;
  console.log("x, y", xOffset, yOffset);

  return (
    <Sprite
      image={`/static/tiles/ST_${props.systemId}.png`}
      x={xOffset}
      y={yOffset}
      anchor={{ x: 0.5, y: 0.5 }}
    />
  );
};
