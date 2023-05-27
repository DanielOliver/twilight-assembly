import * as React from "react";
import {
  BoundingBox,
  PublicGalaxy,
  expandBoundingBox,
  tileBounds,
} from "@twilight-assembly/core";
import { Stage } from "@pixi/react";
import { GalaxySystemTile } from "./pixi/GalaxySystemTile";
import Viewport from "./pixi/Viewport";
import useWindowSize from "./useWindowSize";
import { GalaxyForce } from "./pixi/GalaxyForce";

export const PublicGalaxyMap = (props: { publicGalaxy: PublicGalaxy }) => {
  const systems = Object.values(props.publicGalaxy.systems).map((s, index) => {
    const force = props.publicGalaxy.forces[s.systemId]?.find(
      (force) => force.planetId
    );
    const factionColor =
      props.publicGalaxy.players[force?.playerId ?? 0]?.color;

    const planets = s.planetIds.map((x) => props.publicGalaxy.planets[x]);

    return (
      <GalaxySystemTile
        systemId={s.systemId}
        factionColor={factionColor}
        system={s}
        publicGalaxy={props.publicGalaxy}
        key={index}
      />
    );
  });

  const forces = Object.values(props.publicGalaxy.forces)
    .flatMap((s) => s)
    .map((s, index) => {
      const factionColor = props.publicGalaxy.players[s.playerId ?? 0]?.color;
      const position = props.publicGalaxy.systems[s.systemId].position;

      return (
        <GalaxyForce
          key={index}
          factionColor={factionColor}
          position={position}
          force={s}
        />
      );
    });

  let worldBounds: BoundingBox = {
    maxX: -100,
    maxY: -100,
    minX: 10000,
    minY: 10000,
  };
  Object.values(props.publicGalaxy.systems).forEach((element) => {
    worldBounds = expandBoundingBox(tileBounds(element.position), worldBounds);
  });

  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const windowSize = useWindowSize();
  const [elementSize, setElementSize] = React.useState([800, 600]);

  React.useEffect(() => {
    if (parentRef.current) {
      //@ts-ignore
      const refBounds = parentRef.current?.getBoundingClientRect();
      if (windowSize.height) {
        setElementSize([refBounds.width, windowSize.height - 100]);
      } else {
        setElementSize([refBounds.width, 500]);
      }
    }
  }, [parentRef, windowSize]);

  return (
    <div ref={parentRef} style={{ width: "100%" }}>
      <Stage width={elementSize[0]} height={elementSize[1]}>
        <Viewport
          mapWidth={worldBounds.maxX}
          mapHeight={worldBounds.maxY}
          mapBounds={worldBounds}
          screenWidth={elementSize[0]}
          screenHeight={elementSize[1]}
        >
          {systems}
          {forces}
        </Viewport>
      </Stage>
    </div>
  );
};
