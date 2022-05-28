open Expecto
open TwilightAssembly.Core.Tests.Math_Tests

let tests =
  testList "core" [
    AxialTests
  ]

[<EntryPoint>]
let main args = runTestsWithCLIArgs [] args tests
