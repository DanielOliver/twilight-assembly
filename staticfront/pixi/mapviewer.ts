import { Viewport } from "pixi-viewport";
import { Application, Sprite, Texture, Text } from "pixi.js";

export function setupMapViewer({ ref }: { ref: React.RefObject<HTMLDivElement> }): () => void {
    const app = new Application({
        backgroundColor: 0x0B0A0F,
        resizeTo: window,
        resolution: 1,
    });
    ref.current?.appendChild(app.view);
    app.start();

    const viewport = new Viewport({
        screenWidth: app.screen.width,
        screenHeight: app.screen.height,
        worldWidth: 2000,
        worldHeight: 1000,
        interaction: app.renderer.plugins.interaction
    })

    if (typeof window !== "undefined") {
        window.addEventListener('resize', () => {
            if (typeof window === "undefined") {
                return
            }
            viewport?.resize(window.innerWidth, window.innerHeight)
        })
    }
    app.stage.addChild(viewport)
    viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
        .clamp({
            direction: "all"
        });


    const sprite = Sprite.from('/static/tiles/ST_4.png');
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    viewport.addChild(sprite);

    const sprite2 = viewport.addChild(new Sprite(Texture.WHITE))
    sprite2.tint = 0xff0000
    sprite2.width = sprite2.height = 100
    sprite2.position.set(100, 100)

    const text = new Text('TI4 playing around with rendering', { fontFamily: 'Arial', fontSize: 24, fill: 0xf0f0f0, align: 'center' });
    text.position.set(200, 300);
    viewport.addChild(text);

    return () => {
        // On unload completely destroy the application and all of it's children
        app.destroy(true, true);
    };
}
