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

export const PublicGalaxyMap = (props: { publicGalaxy: PublicGalaxy }) => {
  const systems = Object.values(props.publicGalaxy.systems).map((s, index) => (
    <GalaxySystemTile position={s.position} systemId={s.systemId} key={index} />
  ));

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
        </Viewport>
      </Stage>
    </div>
  );
};
