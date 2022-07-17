
const HexDefaultWidth = 364.0
const HexDefaultHeight = 317.0
const MagicY = 0.87

class Vec2f {
    x: number = 0;
    y: number = 0;
}
class Axial2 {
    q: number = 0;
    r: number = 0;

    public get s(): number {
        return -this.q - this.r;
    }
}


export {
    MagicY,
    HexDefaultWidth,
    HexDefaultHeight
}
