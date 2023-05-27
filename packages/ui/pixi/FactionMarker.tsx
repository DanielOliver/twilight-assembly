import { Sprite } from "@pixi/react";
import { Circle } from "./Circle";
import { Position } from "@twilight-assembly/core";

export const FactionMarker = (props: {
  worldPosition: Position;
  factionId: number;
}) => {
  return (
    <>
      <Circle
        x={props.worldPosition.x}
        y={props.worldPosition.y}
        r={20}
        fill={"#eeeeee"}
      />
      <Sprite
        image={`/static/factions/${props.factionId}.png`}
        x={props.worldPosition.x}
        y={props.worldPosition.y}
        scale={0.06}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </>
  );
};
