import {
  Force,
  ForceI,
  HexDefaultWidth,
  Position,
  tilePositionToCoordinate,
} from "@twilight-assembly/core";
import { ForceMarker } from "./ForceMarker";

export const GalaxyForce = (props: {
  position: Position;
  force: ForceI;
  factionColor: string;
}) => {
  const px = tilePositionToCoordinate({
    x: props.position.x,
    y: props.position.y,
  });

  const forces: (keyof Force)[] = [
    "dreadnoughts",
    "carriers",
    "cruisers",
    "destroyers",
  ];

  return (
    <>
      {forces
        .filter((forceName) => props.force[forceName] > 0)
        .map((forceName, index) => (
          <ForceMarker
            key={forceName}
            pxPosition={{ x: px.x + index * 40, y: px.y - 30 + index * 10 }}
            factionColor={props.factionColor}
            forceName={forceName}
            quantity={props.force[forceName]}
          />
        ))}
    </>
  );
};
