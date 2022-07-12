import { Application, Sprite } from "pixi.js";
import React, { useEffect, useRef } from "react";

const MapViewer = () => {
    const ref = useRef(null);

    useEffect(() => {
        const app = new Application({
            backgroundColor: 0x0B0A0F,
            resizeTo: ref.current
        });
        const sprite = Sprite.from('/static/tiles/ST_4.png');

        // Add app to DOM
        ref.current.appendChild(app.view);
        // Start the PixiJS app
        app.start();

        sprite.anchor.set(0.5);
        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;
        app.stage.addChild(sprite);

        return () => {
            // On unload completely destroy the application and all of it's children
            app.destroy(true, true);
        };
    }, []);

    return <div className='fill-height' ref={ref} />;
}

export default MapViewer