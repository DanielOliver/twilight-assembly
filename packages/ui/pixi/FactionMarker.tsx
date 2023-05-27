import { Sprite } from "@pixi/react";
import { Circle } from "./Circle";
import { Position } from "@twilight-assembly/core";
import { OutlineFilter } from "@pixi/filter-outline";

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
        filters={[new OutlineFilter(2, 0x000000)]}
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
