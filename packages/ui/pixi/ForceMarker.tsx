import { Sprite, Text } from "@pixi/react";
import { ForceI, Position } from "@twilight-assembly/core";
import { TextStyle } from "pixi.js";
import { OutlineFilter } from "@pixi/filter-outline";

export const ForceMarker = (props: {
  pxPosition: Position;
  forceName: keyof ForceI;
  quantity: number;
  factionColor: string;
}) => {
  if (props.quantity <= 0) {
    return <></>;
  }

  return (
    <>
      {/* <Circle
              x={px.x - HexDefaultWidth / 3}
              y={px.y - HexDefaultHeight / 3}
              r={42}
              fill={"#dddddd"}
            /> */}
      <Sprite
        image={`/static/units/${props.forceName}.png`}
        x={props.pxPosition.x}
        y={props.pxPosition.y}
        scale={0.5}
        anchor={{ x: 0.5, y: 0.5 }}
        tint={props.factionColor}
        filters={[new OutlineFilter(3, 0xffffff)]}
      >
        {props.quantity > 1 && (
          <Text
            text={`${props.quantity}`}
            anchor={0.5}
            x={0}
            y={0}
            style={
              new TextStyle({
                align: "center",
                fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                fontSize: 42,
                fontWeight: "800",
                fill: ["#ffffff", "#ffffff"], // gradient
                // stroke: "#01d27e",
                strokeThickness: 5,
                letterSpacing: 20,
              })
            }
          />
        )}
      </Sprite>
    </>
  );
};
