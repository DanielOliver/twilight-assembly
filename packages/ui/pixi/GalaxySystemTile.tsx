import { Sprite } from "@pixi/react";
import {
  HexDefaultWidth,
  Position,
  PublicGalaxy,
  SystemI,
  tilePositionToCoordinate,
} from "@twilight-assembly/core";
import { Color } from "pixi.js";
import * as React from "react";
import { Circle } from "./Circle";
import { FactionMarker } from "./FactionMarker";

export const GalaxySystemTile = (props: {
  systemId: number;
  factionColor?: string;
  system: SystemI;
  publicGalaxy: PublicGalaxy;
}) => {
  const px = tilePositionToCoordinate({
    x: props.system.position.x,
    y: props.system.position.y,
  });

  const planets = props.system.planetIds.map(
    (planetId) => props.publicGalaxy.planets[planetId]
  );

  const planetDisplay = planets.map((planet) => {
    const player = planet.PlayerId
      ? props.publicGalaxy.players[planet.PlayerId]
      : null;

    const planetPosition = {
      x: px.x + planet.pxOffset.x,
      y: px.y + planet.pxOffset.y,
    };

    return (
      <>
        {player && (
          <FactionMarker
            factionId={player.factionId}
            worldPosition={planetPosition}
          />
        )}
      </>
    );
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
            fill={"#262626"}
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
      {planetDisplay}
    </>
  );
};
