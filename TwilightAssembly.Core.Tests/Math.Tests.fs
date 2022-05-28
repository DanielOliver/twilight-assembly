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
      } ]
