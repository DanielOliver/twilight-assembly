namespace TwilightAssembly.Core

[<RequireQualifiedAccess>]
type Wormhole =
  | Alpha
  | Beta
  | Delta
  | Gamma

[<RequireQualifiedAccess>]
type Trait =
  | Cultural
  | Industrial
  | Hazardous

[<RequireQualifiedAccess>]
type Specialty =
  | Cybernetics
  | Biotic
  | Propulsion
  | Warfare

[<RequireQualifiedAccess>]
type Anomaly =
  | AsteroidField
  | Nebula
  | Supernova
  | GravityRift
  | MuaatSupernova

  member this.Readable =
    match this with
    | Anomaly.Nebula -> "Nebula"
    | Anomaly.Supernova -> "Supernova"
    | Anomaly.AsteroidField -> "Asteroid Field"
    | Anomaly.MuaatSupernova -> "Muaat Supernova"
    | Anomaly.GravityRift -> "Gravity Rift"

[<RequireQualifiedAccess>]
type SystemType =
  | Blue
  | Red
  | Green

[<RequireQualifiedAccess>]
type UniqueTile =
  | MecatolRex
  | GhostsHomeSystem
  | GhostsSliceSystem
  | MalliceStartingSide
  | MalliceFlippedSide
  | HopesEnd
  | Primor
  | Mirage

type SystemTile =
  { SystemId: int
    FactionId: int option
    Name: string
    BaseGame: bool
    POK: bool
    Anomaly: Anomaly option
    Wormholes: Wormhole list
    SystemType: SystemType
    EmptySystem: bool
    Unique: UniqueTile option }

  member this.IsRedBorder: bool =
    match this.SystemType with
    | SystemType.Blue -> false
    | SystemType.Green
    | SystemType.Red -> this.Anomaly.IsSome

  member this.HasLegendaryPlanet: bool =
    match this.Unique with
    | None -> false
    | Some unique ->
      match unique with
      | UniqueTile.MalliceStartingSide
      | UniqueTile.MalliceFlippedSide
      | UniqueTile.Primor
      | UniqueTile.HopesEnd
      | UniqueTile.Mirage -> true
      | _ -> false

[<RequireQualifiedAccess>]
type PlanetType =
  | Legendary
  | Home
  | Normal
  | MecatolRex

type Planet =
  { SystemId: int option
    PlanetId: int
    Name: string
    Resources: int
    Influence: int
    PlanetType: PlanetType
    Trait: Trait option
    Specialty: Specialty option }

[<RequireQualifiedAccess>]
type Factions =
  | FederationOfSol
  | MentakCoalition
  | YinBrotherhood
  | EmbersOfMuaat
  | Arborec
  | LizixMindnet
  | Winnu
  | NekroVirus
  | NaaluCollective
  | BaronyOfLetnev
  | ClanOfSaar
  | UniversitiesOfJolNar
  | SardakkNorr
  | XxchaKingdom
  | YssarilTribes
  | EmiratesOfHacan
  | GhostsOfCreuss
  | MahactGeneSorcerers
  | Nomad
  | VuilraithCabal
  | TitansOfUl
  | Empyrean
  | NaazRokhaAlliance
  | ArgentFlight

type Faction =
  { FactionId: int
    Name: string
    Faction: Factions
    BaseGame: bool
    POK: bool
    // Future proof if multiple possible
    HomeSystemIds: int list }
