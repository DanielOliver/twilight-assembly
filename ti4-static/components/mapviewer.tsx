import React, { useEffect, useRef } from "react";
import { setupMapViewer } from "../pixi/mapviewer";

const MapViewer = ({ ttsString }: {
    ttsString: string
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        return setupMapViewer({ ref, ttsString })
    }, [ttsString]);

    return <div className='fill-height' ref={ref} />;
}

export default MapViewer