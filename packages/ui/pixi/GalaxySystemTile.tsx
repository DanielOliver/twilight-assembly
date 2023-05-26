import { Sprite } from "@pixi/react";
import {
  HexDefaultWidth,
  Position,
  SystemI,
  tilePositionToCoordinate,
} from "@twilight-assembly/core";
import { Color } from "pixi.js";
import * as React from "react";
import { Circle } from "./Circle";

export const GalaxySystemTile = (props: {
  systemId: number;
  position: Position;
  factionColor?: string;
  system: SystemI;
}) => {
  const px = tilePositionToCoordinate({
    x: props.position.x,
    y: props.position.y,
  });

  return (
    <>
      <Sprite
        image={`/static/tiles/ST_${props.systemId}.png`}
        x={px.x}
        y={px.y}
        anchor={{ x: 0.5, y: 0.5 }}
      />
      {props.factionColor && (
        <Sprite
          image={`/static/misc/tileoutline.png`}
          x={px.x}
          y={px.y}
          tint={new Color(props.factionColor)}
          anchor={{ x: 0.5, y: 0.5 }}
        />
      )}
      {props.system.frontierToken && (
        <>
          <Circle
            x={px.x - HexDefaultWidth / 3}
            y={px.y}
            r={46}
            fill={"#222222"}
          />
          <Sprite
            image={`/static/misc/Frontier.png`}
            x={px.x - HexDefaultWidth / 3}
            y={px.y}
            scale={0.3}
            alpha={1}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        </>
      )}
    </>
  );
};
