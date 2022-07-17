import { Viewport } from "pixi-viewport";
import { Application, Sprite, ShaderSystem, Container } from "pixi.js";
import { install } from '@pixi/unsafe-eval';

install({ ShaderSystem });

class Vector2 {
    constructor(public x: number, public y: number) { }
}

class Ti4BaseMap {
    static readonly mapWidth = 9;
    static readonly mapHeight = 9;
    private grid: (number | null)[];

    constructor() {
        this.grid = Array(Ti4BaseMap.mapHeight * Ti4BaseMap.mapWidth)
    }

    tiles(): { position: Vector2; mapTile: number; }[] {
        const result: { position: Vector2; mapTile: number; }[] = [];
        for (let y = 0; y < Ti4BaseMap.mapHeight; y++) {
            for (let x = 0; x < Ti4BaseMap.mapWidth; x++) {
                const position = x + (y * Ti4BaseMap.mapWidth);
                const mapTile = this.grid[position];
                if (mapTile === null || mapTile === undefined) {
                    continue;
                }
                result.push({ position: { x, y }, mapTile });
            }
        }
        return result;
    }

    setByXy(x: number, y: number, value: number | null) {
        if (x < 0 || x >= Ti4BaseMap.mapWidth || y < 0 || y >= Ti4BaseMap.mapHeight) {
            return;
        }
        const position = x + (y * Ti4BaseMap.mapWidth);
        this.grid[position] = value;
    }

    setByTtsString(ttsString: string) {
        const tileIds = ttsString.split(' ');
        const tilePositions = [
            //Ring 1
            [4, 3],
            [5, 4],
            [5, 5],
            [4, 5],
            [3, 5],
            [3, 4],
            //Ring 2
            [4, 2],
            [5, 3],
            [6, 3],
            [6, 4],
            [6, 5],
            [5, 6],

            [4, 6],
            [3, 6],
            [2, 5],
            [2, 4],
            [2, 3],
            [3, 3],
            //Ring 3
            [4, 1],
            [5, 2],
            [6, 2],
            [7, 3],
            [7, 4],
            [7, 5],

            [7, 6],
            [6, 6],
            [5, 7],
            [4, 7],
            [3, 7],
            [2, 6],

            [1, 6],
            [1, 5],
            [1, 4],
            [1, 3],
            [2, 2],
            [3, 2],
        ]

        tilePositions.map((e, i) => {
            if (tileIds.length <= i) {
                return;
            }
            this.setByXy(e[0], e[1], Number(tileIds[i]))
        })

        // Mecatol Rex
        this.setByXy(4, 4, 18)
    }

}

class MapViewer {
    private container: Container | null = null;
    static readonly pxTileWidth = 364;
    static readonly pxTileHeight = 317;
    static readonly hexMagicY = 0.7555;

    constructor(private grid: Ti4BaseMap) {
    }

    build(): Container {
        if (this.container !== null) {
            return this.container;
        }

        this.container = new Container()

        const tiles = this.grid.tiles();
        const minX = Math.min(...tiles.map(e => e.position.x))
        const minY = Math.min(...tiles.map(e => e.position.y))


        for (const tile of tiles) {
            const sprite = Sprite.from(`/static/tiles/ST_${tile.mapTile}.png`);
            sprite.anchor.set(0.5);

            const x = tile.position.x;
            const y = tile.position.y;

            const xOffset = (((x - minX) * MapViewer.hexMagicY) + 0.5) * MapViewer.pxTileWidth;
            const yOffset = ((x % 2 == 0) ? 1 + (y - minY) : 0.5 + (y - minY)) * MapViewer.pxTileHeight;
            sprite.position.set(xOffset, yOffset)
            this.container.addChild(sprite)
        }

        return this.container;
    }
}

export function setupMapViewer({ ref,
    ttsString = '24 33 30 26 41 36 35 42 37 44 34 49 31 50 38 39 40 21 0 28 19 0 46 25 0 45 48 0 29 22 0 43 47 0 32 20'
 }: { ref: React.RefObject<HTMLDivElement>; ttsString: string }): () => void {
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
        worldHeight: 2000,
        interaction: app.renderer.plugins.interaction,
        passiveWheel: false
    })


    app.stage.addChild(viewport)
    viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
        .clamp({
            direction: "all"
        })
        .clampZoom({
            minScale: 0.3,
            maxScale: 5
        });

    const grid = new Ti4BaseMap();
    
    grid.setByTtsString(ttsString);

    const mapViewer = new MapViewer(grid);
    const mapContainer = mapViewer.build();
    const mapContainerBounds = mapContainer.getLocalBounds();
    mapContainer.position.set(-mapContainerBounds.x + 5, -mapContainerBounds.y + 5)
    viewport.worldWidth = mapContainerBounds.width + 10
    viewport.worldHeight = mapContainerBounds.height + 10
    viewport.addChild(mapContainer);
    viewport.fitWorld();



    return () => {
        // On unload completely destroy the application and all of it's children
        app.destroy(true, true);
    };
}
