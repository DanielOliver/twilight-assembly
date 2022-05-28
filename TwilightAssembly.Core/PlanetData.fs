module TwilightAssembly.Core.PlanetData

open TwilightAssembly.Core

let private create_home_planet (systemId, planetId, name, resources, influence) : Planet =
  { Planet.SystemId = Some systemId
    PlanetId = planetId
    Name = name
    PlanetType = PlanetType.Home
    Influence = influence
    Resources = resources
    Trait = None
    Specialty = None }

let private create_planet (systemId, planetId, name, resources, influence, planetTrait, specialty) : Planet =
  { Planet.SystemId = Some systemId
    PlanetId = planetId
    Name = name
    PlanetType = PlanetType.Normal
    Influence = influence
    Resources = resources
    Trait = planetTrait
    Specialty = specialty }


let Default: Planet list =
  [
    // BASE GAME Home Planets
    create_home_planet (1, 1, "Jord", 4, 2)
    create_home_planet (2, 2, "Moll Primus", 4, 1)
    create_home_planet (3, 3, "Darien", 4, 4)
    create_home_planet (4, 4, "Muaat", 4, 1)
    create_home_planet (5, 5, "Nestphar", 3, 2)
    create_home_planet (6, 6, "[0.0.0]", 5, 0)
    create_home_planet (7, 7, "Winnu", 3, 4)
    create_home_planet (8, 8, "Mordai II", 4, 0)
    create_home_planet (9, 9, "Maaluuk", 0, 2)
    create_home_planet (9, 10, "Druaa", 3, 1)
    create_home_planet (10, 11, "Arc Prime", 4, 0)
    create_home_planet (10, 12, "Wren Terra", 2, 1)
    create_home_planet (11, 13, "Lisis II", 1, 0)
    create_home_planet (11, 14, "Ragh", 2, 1)
    create_home_planet (12, 15, "Nar", 2, 3)
    create_home_planet (12, 16, "Jol", 1, 2)
    create_home_planet (13, 17, "Tren'lak", 1, 0)
    create_home_planet (13, 18, "Quinarra", 3, 1)
    create_home_planet (14, 19, "Archon Ren", 2, 3)
    create_home_planet (14, 20, "Archon Tau", 1, 1)
    create_home_planet (15, 21, "Retillion", 2, 3)
    create_home_planet (15, 22, "Shalloq", 1, 2)
    create_home_planet (16, 23, "Arretze", 2, 0)
    create_home_planet (16, 24, "Hercant", 1, 1)
    create_home_planet (16, 25, "Kamdorn", 0, 1)

    { Planet.SystemId = Some 18
      PlanetId = 26
      Name = "Mecatol Rex"
      Resources = 1
      Influence = 6
      PlanetType = PlanetType.MecatolRex
      Trait = None
      Specialty = None }
    // Base Game Planets

    create_planet (19, 27, "Wellon", 1, 2, Some Trait.Industrial, Some Specialty.Cybernetics)
    create_planet (20, 28, "Vefut II", 2, 2, Some Trait.Hazardous, None)
    create_planet (21, 29, "Thibah", 1, 1, Some Trait.Industrial, Some Specialty.Propulsion)
    create_planet (22, 30, "Tar'mann", 1, 1, Some Trait.Industrial, Some Specialty.Biotic)
    create_planet (23, 31, "Saudor", 2, 2, Some Trait.Industrial, None)
    create_planet (24, 32, "Mehar Xull", 1, 3, Some Trait.Hazardous, Some Specialty.Warfare)
    create_planet (25, 33, "Quann", 2, 1, Some Trait.Cultural, None)
    create_planet (26, 34, "Lodor", 3, 1, Some Trait.Cultural, None)
    create_planet (27, 35, "New Albion", 1, 1, Some Trait.Industrial, Some Specialty.Biotic)
    create_planet (27, 36, "Starpoint", 3, 1, Some Trait.Hazardous, None)
    create_planet (28, 37, "Tequ'ran", 2, 0, Some Trait.Hazardous, None)
    create_planet (28, 38, "Torkan", 0, 3, Some Trait.Cultural, None)
    create_planet (29, 39, "Qucen'n", 1, 2, Some Trait.Industrial, None)
    create_planet (29, 40, "Rarron", 0, 3, Some Trait.Cultural, None)
    create_planet (30, 41, "Mellon", 0, 2, Some Trait.Cultural, None)
    create_planet (30, 42, "Zohbat", 3, 1, Some Trait.Hazardous, None)
    create_planet (31, 43, "Lazar", 1, 0, Some Trait.Industrial, Some Specialty.Cybernetics)
    create_planet (31, 44, "Sakulag", 2, 1, Some Trait.Hazardous, None)
    create_planet (32, 45, "Dal Bootha", 0, 2, Some Trait.Cultural, None)
    create_planet (32, 46, "Xxehan", 1, 1, Some Trait.Cultural, None)
    create_planet (33, 47, "Corneeq", 1, 2, Some Trait.Cultural, None)
    create_planet (33, 48, "Resculon", 2, 0, Some Trait.Cultural, None)
    create_planet (34, 49, "Centauri", 1, 3, Some Trait.Cultural, None)
    create_planet (34, 50, "Gral", 1, 1, Some Trait.Industrial, Some Specialty.Propulsion)
    create_planet (35, 51, "Bereg", 3, 1, Some Trait.Hazardous, None)
    create_planet (35, 52, "Lirta IV", 2, 3, Some Trait.Hazardous, None)
    create_planet (36, 53, "Arnor", 2, 1, Some Trait.Industrial, None)
    create_planet (36, 54, "Lor", 1, 2, Some Trait.Industrial, None)
    create_planet (37, 55, "Arinam", 1, 2, Some Trait.Industrial, None)
    create_planet (37, 56, "Meer", 0, 4, Some Trait.Hazardous, Some Specialty.Warfare)
    create_planet (38, 57, "Abyz", 3, 0, Some Trait.Hazardous, None)
    create_planet (38, 58, "Fria", 2, 0, Some Trait.Hazardous, None)
    // Ghosts of Creuss
    create_home_planet (51, 59, "Creuss", 4, 2)

    // POK Home Planets
    create_home_planet (52, 60, "Ixth", 3, 5)
    create_home_planet (53, 61, "Arcturus", 4, 4)
    create_home_planet (54, 62, "Acheron", 4, 0)
    create_home_planet (55, 63, "Elysium", 4, 1)
    create_home_planet (56, 64, "The Dark", 3, 4)
    create_home_planet (57, 65, "Naazir", 2, 1)
    create_home_planet (57, 66, "Rokha", 1, 2)
    create_home_planet (58, 67, "Valk", 2, 0)
    create_home_planet (58, 68, "Avar", 1, 1)
    create_home_planet (58, 69, "Ylir", 0, 2)

    // POK planets
    create_planet (59, 70, "Archon Vail", 1, 3, Some Trait.Hazardous, Some Specialty.Propulsion)
    create_planet (60, 71, "Perimeter", 2, 1, Some Trait.Industrial, None)
    create_planet (61, 72, "Ang", 2, 0, Some Trait.Industrial, Some Specialty.Warfare)
    create_planet (62, 73, "Sem-Lore", 3, 2, Some Trait.Cultural, Some Specialty.Cybernetics)
    create_planet (63, 74, "Vorhal", 0, 2, Some Trait.Cultural, Some Specialty.Biotic)
    create_planet (64, 75, "Atlas", 3, 1, Some Trait.Hazardous, None)
    { create_planet (65, 76, "Primor", 2, 1, Some Trait.Cultural, None) with PlanetType = PlanetType.Legendary }
    { create_planet (66, 77, "Hope's End", 3, 0, Some Trait.Hazardous, None) with PlanetType = PlanetType.Legendary }
    create_planet (67, 78, "Cormund", 2, 0, Some Trait.Hazardous, None)
    create_planet (68, 79, "Everra", 3, 1, Some Trait.Cultural, None)
    create_planet (69, 80, "Accoen", 2, 3, Some Trait.Industrial, None)
    create_planet (69, 81, "Jeol Ir", 2, 3, Some Trait.Industrial, None)
    create_planet (70, 82, "Kraag", 2, 1, Some Trait.Hazardous, None)
    create_planet (70, 83, "Siig", 0, 2, Some Trait.Hazardous, None)
    create_planet (71, 84, "Ba'Kal", 3, 2, Some Trait.Industrial, None)
    create_planet (71, 85, "Alio Prima", 1, 1, Some Trait.Cultural, None)
    create_planet (72, 86, "Lisis", 2, 2, Some Trait.Industrial, None)
    create_planet (72, 87, "Velnor", 2, 1, Some Trait.Industrial, Some Specialty.Warfare)
    create_planet (73, 88, "Cealdri", 0, 2, Some Trait.Cultural, Some Specialty.Cybernetics)
    create_planet (73, 89, "Xanhact", 0, 1, Some Trait.Hazardous, None)
    create_planet (74, 90, "Vega Major", 2, 1, Some Trait.Cultural, None)
    create_planet (74, 91, "Vega Minor", 1, 2, Some Trait.Cultural, Some Specialty.Propulsion)
    create_planet (75, 92, "Loki", 1, 2, Some Trait.Cultural, None)
    create_planet (75, 93, "Abaddon", 1, 0, Some Trait.Cultural, None)
    create_planet (75, 94, "Ashtroth", 2, 0, Some Trait.Hazardous, None)
    create_planet (76, 95, "Rigel I", 0, 1, Some Trait.Hazardous, None)
    create_planet (76, 96, "Rigel II", 1, 2, Some Trait.Industrial, None)
    create_planet (76, 97, "Rigel III", 1, 1, Some Trait.Industrial, Some Specialty.Biotic)
    { create_planet (82, 98, "Mallice", 0, 3, Some Trait.Cultural, None) with PlanetType = PlanetType.Legendary }
    { create_planet (83, 99, "Mallice", 0, 3, Some Trait.Cultural, None) with PlanetType = PlanetType.Legendary } ]
