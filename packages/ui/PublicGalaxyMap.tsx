import * as React from "react";
import { PublicGalaxy } from "@twilight-assembly/core";
import { Stage } from "@pixi/react";
import { GalaxySystemTile } from "./pixi/GalaxySystemTile";
import Viewport from "./pixi/Viewport";

export const PublicGalaxyMap = (props: { publicGalaxy: PublicGalaxy }) => {
  const systems = Object.values(props.publicGalaxy.systems).map((s, index) => (
    <GalaxySystemTile position={s.position} systemId={s.systemId} key={index} />
  ));

  const mapWidth = 3640;
  const mapHeight = 3170;
  const screenWidth = 1200;
  const screenHeight = 740;

  return (
    <Stage width={screenWidth} height={screenHeight}>
      <Viewport
        mapWidth={mapWidth}
        mapHeight={mapHeight}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
      >
        {systems}
      </Viewport>
    </Stage>
  );
};
