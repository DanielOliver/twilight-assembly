namespace TwilightAssembly.Core

/// Axial coordinates
type Axial2 =
    {
        Q: int
        R: int
    }

/// Axial coordinates
/// https://www.redblobgames.com/grids/hexagons/
module Axial2 =
    let make q r =
        {
            Axial2.Q = q
            R = r
        }
    /// S is naturally derived by the constraint 0 = q + r + s
    let S (a: Axial2) = -a.Q-a.R
    /// 3-dimensional vector operation
    let subtract (a: Axial2) (b: Axial2) =
        {
            Q = a.Q - b.Q
            R = a.R - b.R
        }
    /// Shortest linear distance
    let distance (a: Axial2) (b: Axial2) =
        let c = subtract a b
        ((abs c.Q) + (abs c.R) + (abs (S c))) / 2


