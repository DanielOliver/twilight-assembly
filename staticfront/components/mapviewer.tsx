import { Viewport } from "pixi-viewport";
import { Application, Sprite, Texture, Text } from "pixi.js";
import React, { useEffect, useRef } from "react";
import { setupMapViewer } from "../pixi/mapviewer";

const MapViewer = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        return setupMapViewer({ ref })
    }, []);

    return <div className='fill-height' ref={ref} />;
}

export default MapViewer