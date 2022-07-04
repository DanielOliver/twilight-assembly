module Data

open TwilightAssembly.Core

do
    System.Console.WriteLine(PlanetData.DefaultArray)
    System.Console.WriteLine(SystemData.Default |> List.toArray)

let PlanetData = PlanetData.DefaultArray

