module TwilightAssembly.Core.SystemData

open TwilightAssembly.Core

let private create_home_system (system_id, name, baseGame): SystemTile =
    { SystemTile.SystemId = system_id
      FactionId = Some system_id
      Name = name
      BaseGame = baseGame
      POK = true
      Anomaly = None
      Wormholes = []
      SystemType = SystemType.Green
      EmptySystem = false
      Unique = None }

let private create_planet_system (system_id, baseGame): SystemTile =
    { SystemTile.SystemId = system_id
      FactionId = None
      Name = ""
      BaseGame = baseGame
      POK = true
      Anomaly = None
      Wormholes = []
      SystemType = SystemType.Blue
      EmptySystem = false
      Unique = None }


let private create_anomaly_system (system_id, baseGame, anomaly): SystemTile =
    { SystemTile.SystemId = system_id
      FactionId = None
      Name = ""
      BaseGame = baseGame
      POK = true
      Anomaly = Some anomaly
      Wormholes = []
      SystemType = SystemType.Red
      EmptySystem = true
      Unique = None }

let private create_empty_system (system_id, baseGame): SystemTile =
    { SystemTile.SystemId = system_id
      FactionId = None
      Name = ""
      BaseGame = baseGame
      POK = true
      Anomaly = None
      Wormholes = []
      SystemType = SystemType.Red
      EmptySystem = true
      Unique = None }

let Default: SystemTile list =
    [ // BASE GAME Home Systems
      create_home_system (1, "The Federation of Sol", true)
      create_home_system (2, "The Mentak Coalition", true)
      create_home_system (3, "The Yin Brotherhood", true)
      create_home_system (4, "The Embers of Muaat", true)
      create_home_system (5, "The Arborec", true)
      create_home_system (6, "The Lizix Mindnet", true)
      create_home_system (7, "The Winnu", true)
      create_home_system (8, "The Nekro Virus", true)
      create_home_system (9, "The Naalu Collective", true)
      create_home_system (10, "The Barony of Letnev", true)
      create_home_system (11, "The Clan of Saar", true)
      create_home_system (12, "The Universities of Jol-Nar", true)
      create_home_system (13, "Sardakk N'orr", true)
      create_home_system (14, "The Xxcha Kingdom", true)
      create_home_system (15, "The Yssaril Tribes", true)
      create_home_system (16, "The Emirates of Hacan", true)
      { create_home_system (17, "The Ghosts of Creuss", true) with
          Unique = Some UniqueTile.GhostsHomeSystem
          EmptySystem = true
          Wormholes = [ Wormhole.Delta ] }
      { create_home_system (51, "The Ghosts of Creuss", true) with
          Unique = Some UniqueTile.GhostsSliceSystem
          Wormholes = [ Wormhole.Delta ] }
      // POK Home Systems
      create_home_system (52, "The Mahact Gene-sorcerers", false)
      create_home_system (53, "The Nomad", false)
      create_home_system (54, "The Vuil'raith Cabal", false)
      create_home_system (55, "The Titans of Ul", false)
      { create_home_system (56, "The Empyrean", false) with Anomaly = Some Anomaly.Nebula }
      create_home_system (57, "The Naaz-Rokha Alliance", false)
      create_home_system (58, "The Argent Flight", false)
      // Mecatol Rex
      { create_planet_system (18, true) with
          Name = "Mecatol Rex"
          Unique = Some UniqueTile.MecatolRex }
      // More Base Game planets
      create_planet_system (19, true)
      create_planet_system (20, true)
      create_planet_system (21, true)
      create_planet_system (22, true)
      create_planet_system (23, true)
      create_planet_system (24, true)
      create_planet_system (25, true)
      create_planet_system (26, true)
      create_planet_system (27, true)
      create_planet_system (28, true)
      create_planet_system (29, true)
      create_planet_system (30, true)
      create_planet_system (31, true)
      create_planet_system (32, true)
      create_planet_system (33, true)
      create_planet_system (34, true)
      create_planet_system (35, true)
      create_planet_system (36, true)
      create_planet_system (37, true)
      create_planet_system (38, true)
      // More Base Game Anomalies
      { create_empty_system (39, true) with Wormholes = [ Wormhole.Alpha ] }
      { create_empty_system (40, true) with Wormholes = [ Wormhole.Beta ] }
      create_anomaly_system (41, true, Anomaly.GravityRift)
      create_anomaly_system (42, true, Anomaly.Nebula)
      create_anomaly_system (43, true, Anomaly.Supernova)
      create_anomaly_system (44, true, Anomaly.AsteroidField)
      { create_empty_system (45, true) with Wormholes = [ Wormhole.Beta ] }
      create_empty_system (46, true)
      create_empty_system (47, true)
      create_empty_system (48, true)
      create_empty_system (49, true)
      create_empty_system (50, true)
      // More POK planets
      create_planet_system (59, false)
      create_planet_system (60, false)
      create_planet_system (61, false)
      create_planet_system (62, false)
      create_planet_system (63, false)
      create_planet_system (64, false)
      { create_planet_system (65, false) with Unique = Some UniqueTile.Primor }
      { create_planet_system (66, false) with Unique = Some UniqueTile.HopesEnd }

      { create_anomaly_system (67, false, Anomaly.GravityRift) with EmptySystem = false }
      { create_anomaly_system (68, false, Anomaly.Nebula) with EmptySystem = false }
      create_planet_system (69, false)
      create_planet_system (70, false)
      create_planet_system (71, false)
      create_planet_system (72, false)
      create_planet_system (73, false)
      create_planet_system (74, false)
      create_planet_system (75, false)
      create_planet_system (76, false)
      create_empty_system (77, false)
      create_empty_system (78, false)

      { create_anomaly_system (79, false, Anomaly.AsteroidField) with Wormholes = [ Wormhole.Alpha ] }
      create_anomaly_system (80, false, Anomaly.Supernova)
      create_anomaly_system (81, false, Anomaly.MuaatSupernova)
      { create_planet_system (82, false) with
          Unique = Some UniqueTile.MalliceStartingSide
          Wormholes = [ Wormhole.Gamma ] }
      { create_planet_system (83, false) with
          Unique = Some UniqueTile.MalliceFlippedSide
          Wormholes =
              [ Wormhole.Gamma
                Wormhole.Alpha
                Wormhole.Beta ] } ]    
    
let DefaultWithoutMalliceBack = Default |> List.where( fun t -> t.Unique.IsNone || t.Unique.Value <> UniqueTile.MalliceFlippedSide)
