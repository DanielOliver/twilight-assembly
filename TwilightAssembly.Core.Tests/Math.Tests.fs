module TwilightAssembly.Core.Tests.Math_Tests

open Expecto
open TwilightAssembly.Core

let AxialTests =
  testList
    "Axial2"
    [ test "distance" {
        let center = Axial2.make 0 0
        let northOne = Axial2.make 0 -1
        let eastDirectLineOne = Axial2.make 2 -1
        let westDirectLineOne = Axial2.make -2 1
        let player1Start = Axial2.make -3 0
        let player4Start = Axial2.make 3 0

        Expect.equal (Axial2.distance center northOne) 1 "distance center-north"
        Expect.equal (Axial2.distance eastDirectLineOne center) 2 "distance east-center"
        Expect.equal (Axial2.distance northOne eastDirectLineOne) 2 "distance north-east"
        Expect.equal (Axial2.distance westDirectLineOne eastDirectLineOne) 4 "distance west-east"
        Expect.equal (Axial2.distance player1Start eastDirectLineOne) 5 "distance player1start-east"
        Expect.equal (Axial2.distance player1Start player4Start) 6 "distance player1start-player4start"
      }
      test "actualLocation" {
        let center = Axial2.make 0 0
        Expect.equal (Axial2.calculateLocation center).X 0 "calculateLocation centerX"
        Expect.equal (Axial2.calculateLocation center).Y 0 "calculateLocation centerY"

        let player1Start = Axial2.make -3 0
        Expect.equal (Axial2.calculateLocation player1Start).X -950.04 "calculateLocation p1X"
        Expect.equal (Axial2.calculateLocation player1Start).Y -475.50 "calculateLocation p1Y"

        let eastDirectLineOne = Axial2.make 2 -1
        Expect.equal (Axial2.calculateLocation eastDirectLineOne).X 633.36 "calculateLocation eastX"
        Expect.equal (Axial2.calculateLocation eastDirectLineOne).Y 0 "calculateLocation eastY"
      } ]
