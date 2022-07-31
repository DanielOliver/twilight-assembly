import { Planet, PlanetType, Trait, Specialty, System, SystemType, Wormhole, UniqueTile, Anomaly } from "./types"

const PlanetData: Planet[] = [
    {
      "systemId": 1,
      "planetId": 1,
      "name": "Jord",
      "resources": 4,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 2,
      "planetId": 2,
      "name": "Moll Primus",
      "resources": 4,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 3,
      "planetId": 3,
      "name": "Darien",
      "resources": 4,
      "influence": 4,
      planetType: PlanetType.Home
    },
    {
      "systemId": 4,
      "planetId": 4,
      "name": "Muaat",
      "resources": 4,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 5,
      "planetId": 5,
      "name": "Nestphar",
      "resources": 3,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 6,
      "planetId": 6,
      "name": "[0.0.0]",
      "resources": 5,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 7,
      "planetId": 7,
      "name": "Winnu",
      "resources": 3,
      "influence": 4,
      planetType: PlanetType.Home
    },
    {
      "systemId": 8,
      "planetId": 8,
      "name": "Mordai II",
      "resources": 4,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 9,
      "planetId": 9,
      "name": "Maaluuk",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 9,
      "planetId": 10,
      "name": "Druaa",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 10,
      "planetId": 11,
      "name": "Arc Prime",
      "resources": 4,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 10,
      "planetId": 12,
      "name": "Wren Terra",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 11,
      "planetId": 13,
      "name": "Lisis II",
      "resources": 1,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 11,
      "planetId": 14,
      "name": "Ragh",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 12,
      "planetId": 15,
      "name": "Nar",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Home
    },
    {
      "systemId": 12,
      "planetId": 16,
      "name": "Jol",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 13,
      "planetId": 17,
      "name": "Tren'lak",
      "resources": 1,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 13,
      "planetId": 18,
      "name": "Quinarra",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 14,
      "planetId": 19,
      "name": "Archon Ren",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Home
    },
    {
      "systemId": 14,
      "planetId": 20,
      "name": "Archon Tau",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 15,
      "planetId": 21,
      "name": "Retillion",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Home
    },
    {
      "systemId": 15,
      "planetId": 22,
      "name": "Shalloq",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 16,
      "planetId": 23,
      "name": "Arretze",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 16,
      "planetId": 24,
      "name": "Hercant",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 16,
      "planetId": 25,
      "name": "Kamdorn",
      "resources": 0,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 18,
      "planetId": 26,
      "name": "Mecatol Rex",
      "resources": 1,
      "influence": 6,
      planetType: PlanetType.MecatolRex
    },
    {
      "systemId": 19,
      "planetId": 27,
      "name": "Wellon",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Cybernetics
    },
    {
      "systemId": 20,
      "planetId": 28,
      "name": "Vefut II",
      "resources": 2,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 21,
      "planetId": 29,
      "name": "Thibah",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Propulsion
    },
    {
      "systemId": 22,
      "planetId": 30,
      "name": "Tar'mann",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Biotic
    },
    {
      "systemId": 23,
      "planetId": 31,
      "name": "Saudor",
      "resources": 2,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 24,
      "planetId": 32,
      "name": "Mehar Xull",
      "resources": 1,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous,
      specialty: Specialty.Warfare
    },
    {
      "systemId": 25,
      "planetId": 33,
      "name": "Quann",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 26,
      "planetId": 34,
      "name": "Lodor",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 27,
      "planetId": 35,
      "name": "New Albion",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Biotic
    },
    {
      "systemId": 27,
      "planetId": 36,
      "name": "Starpoint",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 28,
      "planetId": 37,
      "name": "Tequ'ran",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 28,
      "planetId": 38,
      "name": "Torkan",
      "resources": 0,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 29,
      "planetId": 39,
      "name": "Qucen'n",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 29,
      "planetId": 40,
      "name": "Rarron",
      "resources": 0,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 30,
      "planetId": 41,
      "name": "Mellon",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 30,
      "planetId": 42,
      "name": "Zohbat",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 31,
      "planetId": 43,
      "name": "Lazar",
      "resources": 1,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Cybernetics
    },
    {
      "systemId": 31,
      "planetId": 44,
      "name": "Sakulag",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 32,
      "planetId": 45,
      "name": "Dal Bootha",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 32,
      "planetId": 46,
      "name": "Xxehan",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 33,
      "planetId": 47,
      "name": "Corneeq",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 33,
      "planetId": 48,
      "name": "Resculon",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 34,
      "planetId": 49,
      "name": "Centauri",
      "resources": 1,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 34,
      "planetId": 50,
      "name": "Gral",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Propulsion
    },
    {
      "systemId": 35,
      "planetId": 51,
      "name": "Bereg",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 35,
      "planetId": 52,
      "name": "Lirta IV",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 36,
      "planetId": 53,
      "name": "Arnor",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 36,
      "planetId": 54,
      "name": "Lor",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 37,
      "planetId": 55,
      "name": "Arinam",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 37,
      "planetId": 56,
      "name": "Meer",
      "resources": 0,
      "influence": 4,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous,
      specialty: Specialty.Warfare
    },
    {
      "systemId": 38,
      "planetId": 57,
      "name": "Abyz",
      "resources": 3,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 38,
      "planetId": 58,
      "name": "Fria",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 51,
      "planetId": 59,
      "name": "Creuss",
      "resources": 4,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 52,
      "planetId": 60,
      "name": "Ixth",
      "resources": 3,
      "influence": 5,
      planetType: PlanetType.Home
    },
    {
      "systemId": 53,
      "planetId": 61,
      "name": "Arcturus",
      "resources": 4,
      "influence": 4,
      planetType: PlanetType.Home
    },
    {
      "systemId": 54,
      "planetId": 62,
      "name": "Acheron",
      "resources": 4,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 55,
      "planetId": 63,
      "name": "Elysium",
      "resources": 4,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 56,
      "planetId": 64,
      "name": "The Dark",
      "resources": 3,
      "influence": 4,
      planetType: PlanetType.Home
    },
    {
      "systemId": 57,
      "planetId": 65,
      "name": "Naazir",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 57,
      "planetId": 66,
      "name": "Rokha",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 58,
      "planetId": 67,
      "name": "Valk",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Home
    },
    {
      "systemId": 58,
      "planetId": 68,
      "name": "Avar",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Home
    },
    {
      "systemId": 58,
      "planetId": 69,
      "name": "Ylir",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Home
    },
    {
      "systemId": 59,
      "planetId": 70,
      "name": "Archon Vail",
      "resources": 1,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous,
      specialty: Specialty.Propulsion
    },
    {
      "systemId": 60,
      "planetId": 71,
      "name": "Perimeter",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 61,
      "planetId": 72,
      "name": "Ang",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Warfare
    },
    {
      "systemId": 62,
      "planetId": 73,
      "name": "Sem-Lore",
      "resources": 3,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural,
      specialty: Specialty.Cybernetics
    },
    {
      "systemId": 63,
      "planetId": 74,
      "name": "Vorhal",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural,
      specialty: Specialty.Biotic
    },
    {
      "systemId": 64,
      "planetId": 75,
      "name": "Atlas",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 65,
      "planetId": 76,
      "name": "Primor",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Legendary,
      trait: Trait.Cultural
    },
    {
      "systemId": 66,
      "planetId": 77,
      "name": "Hope's End",
      "resources": 3,
      "influence": 0,
      planetType: PlanetType.Legendary,
      trait: Trait.Hazardous
    },
    {
      "systemId": 67,
      "planetId": 78,
      "name": "Cormund",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 68,
      "planetId": 79,
      "name": "Everra",
      "resources": 3,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 69,
      "planetId": 80,
      "name": "Accoen",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 69,
      "planetId": 81,
      "name": "Jeol Ir",
      "resources": 2,
      "influence": 3,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 70,
      "planetId": 82,
      "name": "Kraag",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 70,
      "planetId": 83,
      "name": "Siig",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 71,
      "planetId": 84,
      "name": "Ba'Kal",
      "resources": 3,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 71,
      "planetId": 85,
      "name": "Alio Prima",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 72,
      "planetId": 86,
      "name": "Lisis",
      "resources": 2,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 72,
      "planetId": 87,
      "name": "Velnor",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Warfare
    },
    {
      "systemId": 73,
      "planetId": 88,
      "name": "Cealdri",
      "resources": 0,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural,
      specialty: Specialty.Cybernetics
    },
    {
      "systemId": 73,
      "planetId": 89,
      "name": "Xanhact",
      "resources": 0,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 74,
      "planetId": 90,
      "name": "Vega Major",
      "resources": 2,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 74,
      "planetId": 91,
      "name": "Vega Minor",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural,
      specialty: Specialty.Propulsion
    },
    {
      "systemId": 75,
      "planetId": 92,
      "name": "Loki",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 75,
      "planetId": 93,
      "name": "Abaddon",
      "resources": 1,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Cultural
    },
    {
      "systemId": 75,
      "planetId": 94,
      "name": "Ashtroth",
      "resources": 2,
      "influence": 0,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 76,
      "planetId": 95,
      "name": "Rigel I",
      "resources": 0,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Hazardous
    },
    {
      "systemId": 76,
      "planetId": 96,
      "name": "Rigel II",
      "resources": 1,
      "influence": 2,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial
    },
    {
      "systemId": 76,
      "planetId": 97,
      "name": "Rigel III",
      "resources": 1,
      "influence": 1,
      planetType: PlanetType.Normal,
      trait: Trait.Industrial,
      specialty: Specialty.Biotic
    },
    {
      "systemId": 82,
      "planetId": 98,
      "name": "Mallice",
      "resources": 0,
      "influence": 3,
      planetType: PlanetType.Legendary,
      trait: Trait.Cultural
    },
    {
      "systemId": 83,
      "planetId": 99,
      "name": "Mallice",
      "resources": 0,
      "influence": 3,
      planetType: PlanetType.Legendary,
      trait: Trait.Cultural
    }
  ];

const SystemData: System[] =  [
    {
      "systemId": 1,
      "factionId": 1,
      "name": "The Federation of Sol",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 2,
      "factionId": 2,
      "name": "The Mentak Coalition",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 3,
      "factionId": 3,
      "name": "The Yin Brotherhood",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 4,
      "factionId": 4,
      "name": "The Embers of Muaat",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 5,
      "factionId": 5,
      "name": "The Arborec",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 6,
      "factionId": 6,
      "name": "The Lizix Mindnet",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 7,
      "factionId": 7,
      "name": "The Winnu",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 8,
      "factionId": 8,
      "name": "The Nekro Virus",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 9,
      "factionId": 9,
      "name": "The Naalu Collective",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 10,
      "factionId": 10,
      "name": "The Barony of Letnev",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 11,
      "factionId": 11,
      "name": "The Clan of Saar",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 12,
      "factionId": 12,
      "name": "The Universities of Jol-Nar",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 13,
      "factionId": 13,
      "name": "Sardakk N'orr",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 14,
      "factionId": 14,
      "name": "The Xxcha Kingdom",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 15,
      "factionId": 15,
      "name": "The Yssaril Tribes",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 16,
      "factionId": 16,
      "name": "The Emirates of Hacan",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 17,
      "factionId": 17,
      "name": "The Ghosts of Creuss",
      "baseGame": true,
      "pok": true,
      "wormholes": [ Wormhole.Delta ],
      systemType: SystemType.Green,
      "emptySystem": true,
      "unique": UniqueTile.GhostsHomeSystem
    },
    {
      "systemId": 51,
      "factionId": 51,
      "name": "The Ghosts of Creuss",
      "baseGame": true,
      "pok": true,
      "wormholes": [ Wormhole.Delta ],
      systemType: SystemType.Green,
      "emptySystem": false,
      "unique": UniqueTile.GhostsSliceSystem
    },
    {
      "systemId": 52,
      "factionId": 52,
      "name": "The Mahact Gene-sorcerers",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 53,
      "factionId": 53,
      "name": "The Nomad",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 54,
      "factionId": 54,
      "name": "The Vuil'raith Cabal",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 55,
      "factionId": 55,
      "name": "The Titans of Ul",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 56,
      "factionId": 56,
      "name": "The Empyrean",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.Nebula,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 57,
      "factionId": 57,
      "name": "The Naaz-Rokha Alliance",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 58,
      "factionId": 58,
      "name": "The Argent Flight",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Green,
      "emptySystem": false
    },
    {
      "systemId": 18,
      "name": "Mecatol Rex",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false,
      "unique": UniqueTile.MecatolRex
    },
    {
      "systemId": 19,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 20,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 21,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 22,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 23,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 24,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 25,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 26,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 27,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 28,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 29,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 30,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 31,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 32,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 33,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 34,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 35,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 36,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 37,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 38,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 39,
      "name": "",
      "baseGame": true,
      "pok": true,
      "wormholes": [ Wormhole.Alpha ],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 40,
      "name": "",
      "baseGame": true,
      "pok": true,
      "wormholes": [ Wormhole.Beta ],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 41,
      "name": "",
      "baseGame": true,
      "pok": true,
      "anomaly": Anomaly.GravityRift,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 42,
      "name": "",
      "baseGame": true,
      "pok": true,
      "anomaly": Anomaly.Nebula,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 43,
      "name": "",
      "baseGame": true,
      "pok": true,
      "anomaly": Anomaly.Supernova,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 44,
      "name": "",
      "baseGame": true,
      "pok": true,
      "anomaly": Anomaly.AsteroidField,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 45,
      "name": "",
      "baseGame": true,
      "pok": true,
      "wormholes": [ Wormhole.Beta ],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 46,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 47,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 48,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 49,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 50,
      "name": "",
      "baseGame": true,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 59,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 60,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 61,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 62,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 63,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 64,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 65,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false,
      "unique": UniqueTile.Primor
    },
    {
      "systemId": 66,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false,
      "unique": UniqueTile.HopesEnd
    },
    {
      "systemId": 67,
      "name": "",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.GravityRift,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": false
    },
    {
      "systemId": 68,
      "name": "",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.Nebula,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": false
    },
    {
      "systemId": 69,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 70,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 71,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 72,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 73,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 74,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 75,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 76,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Blue,
      "emptySystem": false
    },
    {
      "systemId": 77,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 78,
      "name": "",
      "baseGame": false,
      "pok": true,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 79,
      "name": "",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.AsteroidField,
      "wormholes": [ Wormhole.Alpha ],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 80,
      "name": "",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.Supernova,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 81,
      "name": "",
      "baseGame": false,
      "pok": true,
      "anomaly": Anomaly.MuaatSupernova,
      wormholes: [],
      systemType: SystemType.Red,
      "emptySystem": true
    },
    {
      "systemId": 82,
      "name": "",
      "baseGame": false,
      "pok": true,
      "wormholes": [ Wormhole.Gamma ],
      systemType: SystemType.Blue,
      "emptySystem": false,
      "unique": UniqueTile.MalliceStartingSide
    },
    {
      "systemId": 83,
      "name": "",
      "baseGame": false,
      "pok": true,
      "wormholes": [ Wormhole.Alpha, Wormhole.Beta, Wormhole.Gamma ],
      systemType: SystemType.Blue,
      "emptySystem": false,
      "unique": UniqueTile.MalliceFlippedSide
    }
  ]

export {
  PlanetData
}
