import { Sprite } from "@pixi/react";
import { Position, tilePositionToCoordinate } from "@twilight-assembly/core";
import * as React from "react";

export const GalaxySystemTile = (props: {
  systemId: number;
  position: Position;
}) => {
  const px = tilePositionToCoordinate({
    x: props.position.x,
    y: props.position.y,
  });

  return (
    <Sprite
      image={`/static/tiles/ST_${props.systemId}.png`}
      x={px.x}
      y={px.y}
      anchor={{ x: 0.5, y: 0.5 }}
    />
  );
};
