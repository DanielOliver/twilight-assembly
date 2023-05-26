import { Sprite } from "@pixi/react";
import {
  ForceI,
  HexDefaultHeight,
  HexDefaultWidth,
  Position,
  SystemI,
  tilePositionToCoordinate,
} from "@twilight-assembly/core";
import { Color } from "pixi.js";
import * as React from "react";
import { Circle } from "./Circle";

export const GalaxyForce = (props: {
  position: Position;
  force: ForceI;
  factionColor: string;
}) => {
  const px = tilePositionToCoordinate({
    x: props.position.x,
    y: props.position.y,
  });
  return (
    <>
      {props.force.carriers > 0 && (
        <>
          <Circle
            x={px.x - HexDefaultWidth / 3}
            y={px.y - HexDefaultHeight / 3}
            r={42}
            fill={"#dddddd"}
          />
          <Sprite
            image={`/static/units/carrier.png`}
            x={px.x - HexDefaultWidth / 3}
            y={px.y - HexDefaultHeight / 3}
            scale={0.7}
            anchor={{ x: 0.5, y: 0.5 }}
            tint={props.factionColor}
          />
        </>
      )}
    </>
  );
};
