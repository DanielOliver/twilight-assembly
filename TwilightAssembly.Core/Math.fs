namespace TwilightAssembly.Core

module Known =
  let HexDefaultWidth = 364.0
  let HexDefaultHeight = 317.0
  let MagicY = 0.87

type Vec2f = { X: float; Y: float }

/// Axial coordinates
type Axial2 = { Q: int; R: int }

/// Axial coordinates
/// https://www.redblobgames.com/grids/hexagons/
module Axial2 =
  let make q r = { Axial2.Q = q; R = r }
  /// S is naturally derived by the constraint 0 = q + r + s
  let S (a: Axial2) = -a.Q - a.R
  /// 3-dimensional vector operation
  let subtract (a: Axial2) (b: Axial2) = { Q = a.Q - b.Q; R = a.R - b.R }

  /// Shortest linear distance
  let distance (a: Axial2) (b: Axial2) =
    let c = subtract a b
    ((abs c.Q) + (abs c.R) + (abs (S c))) / 2

  let heightOffset (a: Axial2) = (float (a.Q) / 2.0) + float (a.R)
  let widthOffset (a: Axial2) = float (a.Q)

  let calculateLocation (a: Axial2) : Vec2f =
    let heightOffset = heightOffset a
    let widthOffset = widthOffset a

    { X = widthOffset * Known.HexDefaultWidth * Known.MagicY
      Y = heightOffset * Known.HexDefaultHeight }
