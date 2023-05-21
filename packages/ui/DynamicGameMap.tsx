import React, { useEffect, useRef } from "react";
import { setupMapViewer } from "./pixi/mapviewer";

const DynamicGameMap = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return setupMapViewer({ ref, ttsString });
  }, [ttsString]);

  return <div className="fill-height" ref={ref} />;
};

export default DynamicGameMap;
