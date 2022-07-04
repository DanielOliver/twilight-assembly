import { Planet, PlanetType, Trait, Specialty } from "./types"

const PlanetData: Planet[] = [
    {
      "SystemId": 1,
      "PlanetId": 1,
      "Name": "Jord",
      "Resources": 4,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 2,
      "PlanetId": 2,
      "Name": "Moll Primus",
      "Resources": 4,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 3,
      "PlanetId": 3,
      "Name": "Darien",
      "Resources": 4,
      "Influence": 4,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 4,
      "PlanetId": 4,
      "Name": "Muaat",
      "Resources": 4,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 5,
      "PlanetId": 5,
      "Name": "Nestphar",
      "Resources": 3,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 6,
      "PlanetId": 6,
      "Name": "[0.0.0]",
      "Resources": 5,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 7,
      "PlanetId": 7,
      "Name": "Winnu",
      "Resources": 3,
      "Influence": 4,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 8,
      "PlanetId": 8,
      "Name": "Mordai II",
      "Resources": 4,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 9,
      "PlanetId": 9,
      "Name": "Maaluuk",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 9,
      "PlanetId": 10,
      "Name": "Druaa",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 10,
      "PlanetId": 11,
      "Name": "Arc Prime",
      "Resources": 4,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 10,
      "PlanetId": 12,
      "Name": "Wren Terra",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 11,
      "PlanetId": 13,
      "Name": "Lisis II",
      "Resources": 1,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 11,
      "PlanetId": 14,
      "Name": "Ragh",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 12,
      "PlanetId": 15,
      "Name": "Nar",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 12,
      "PlanetId": 16,
      "Name": "Jol",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 13,
      "PlanetId": 17,
      "Name": "Tren'lak",
      "Resources": 1,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 13,
      "PlanetId": 18,
      "Name": "Quinarra",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 14,
      "PlanetId": 19,
      "Name": "Archon Ren",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 14,
      "PlanetId": 20,
      "Name": "Archon Tau",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 15,
      "PlanetId": 21,
      "Name": "Retillion",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 15,
      "PlanetId": 22,
      "Name": "Shalloq",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 16,
      "PlanetId": 23,
      "Name": "Arretze",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 16,
      "PlanetId": 24,
      "Name": "Hercant",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 16,
      "PlanetId": 25,
      "Name": "Kamdorn",
      "Resources": 0,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 18,
      "PlanetId": 26,
      "Name": "Mecatol Rex",
      "Resources": 1,
      "Influence": 6,
      PlanetType: PlanetType.MecatolRex
    },
    {
      "SystemId": 19,
      "PlanetId": 27,
      "Name": "Wellon",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Cybernetics
    },
    {
      "SystemId": 20,
      "PlanetId": 28,
      "Name": "Vefut II",
      "Resources": 2,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 21,
      "PlanetId": 29,
      "Name": "Thibah",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Propulsion
    },
    {
      "SystemId": 22,
      "PlanetId": 30,
      "Name": "Tar'mann",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Biotic
    },
    {
      "SystemId": 23,
      "PlanetId": 31,
      "Name": "Saudor",
      "Resources": 2,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 24,
      "PlanetId": 32,
      "Name": "Mehar Xull",
      "Resources": 1,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous,
      Specialty: Specialty.Warfare
    },
    {
      "SystemId": 25,
      "PlanetId": 33,
      "Name": "Quann",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 26,
      "PlanetId": 34,
      "Name": "Lodor",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 27,
      "PlanetId": 35,
      "Name": "New Albion",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Biotic
    },
    {
      "SystemId": 27,
      "PlanetId": 36,
      "Name": "Starpoint",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 28,
      "PlanetId": 37,
      "Name": "Tequ'ran",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 28,
      "PlanetId": 38,
      "Name": "Torkan",
      "Resources": 0,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 29,
      "PlanetId": 39,
      "Name": "Qucen'n",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 29,
      "PlanetId": 40,
      "Name": "Rarron",
      "Resources": 0,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 30,
      "PlanetId": 41,
      "Name": "Mellon",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 30,
      "PlanetId": 42,
      "Name": "Zohbat",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 31,
      "PlanetId": 43,
      "Name": "Lazar",
      "Resources": 1,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Cybernetics
    },
    {
      "SystemId": 31,
      "PlanetId": 44,
      "Name": "Sakulag",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 32,
      "PlanetId": 45,
      "Name": "Dal Bootha",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 32,
      "PlanetId": 46,
      "Name": "Xxehan",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 33,
      "PlanetId": 47,
      "Name": "Corneeq",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 33,
      "PlanetId": 48,
      "Name": "Resculon",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 34,
      "PlanetId": 49,
      "Name": "Centauri",
      "Resources": 1,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 34,
      "PlanetId": 50,
      "Name": "Gral",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Propulsion
    },
    {
      "SystemId": 35,
      "PlanetId": 51,
      "Name": "Bereg",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 35,
      "PlanetId": 52,
      "Name": "Lirta IV",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 36,
      "PlanetId": 53,
      "Name": "Arnor",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 36,
      "PlanetId": 54,
      "Name": "Lor",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 37,
      "PlanetId": 55,
      "Name": "Arinam",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 37,
      "PlanetId": 56,
      "Name": "Meer",
      "Resources": 0,
      "Influence": 4,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous,
      Specialty: Specialty.Warfare
    },
    {
      "SystemId": 38,
      "PlanetId": 57,
      "Name": "Abyz",
      "Resources": 3,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 38,
      "PlanetId": 58,
      "Name": "Fria",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 51,
      "PlanetId": 59,
      "Name": "Creuss",
      "Resources": 4,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 52,
      "PlanetId": 60,
      "Name": "Ixth",
      "Resources": 3,
      "Influence": 5,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 53,
      "PlanetId": 61,
      "Name": "Arcturus",
      "Resources": 4,
      "Influence": 4,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 54,
      "PlanetId": 62,
      "Name": "Acheron",
      "Resources": 4,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 55,
      "PlanetId": 63,
      "Name": "Elysium",
      "Resources": 4,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 56,
      "PlanetId": 64,
      "Name": "The Dark",
      "Resources": 3,
      "Influence": 4,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 57,
      "PlanetId": 65,
      "Name": "Naazir",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 57,
      "PlanetId": 66,
      "Name": "Rokha",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 58,
      "PlanetId": 67,
      "Name": "Valk",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 58,
      "PlanetId": 68,
      "Name": "Avar",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 58,
      "PlanetId": 69,
      "Name": "Ylir",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Home
    },
    {
      "SystemId": 59,
      "PlanetId": 70,
      "Name": "Archon Vail",
      "Resources": 1,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous,
      Specialty: Specialty.Propulsion
    },
    {
      "SystemId": 60,
      "PlanetId": 71,
      "Name": "Perimeter",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 61,
      "PlanetId": 72,
      "Name": "Ang",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Warfare
    },
    {
      "SystemId": 62,
      "PlanetId": 73,
      "Name": "Sem-Lore",
      "Resources": 3,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural,
      Specialty: Specialty.Cybernetics
    },
    {
      "SystemId": 63,
      "PlanetId": 74,
      "Name": "Vorhal",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural,
      Specialty: Specialty.Biotic
    },
    {
      "SystemId": 64,
      "PlanetId": 75,
      "Name": "Atlas",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 65,
      "PlanetId": 76,
      "Name": "Primor",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Legendary,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 66,
      "PlanetId": 77,
      "Name": "Hope's End",
      "Resources": 3,
      "Influence": 0,
      PlanetType: PlanetType.Legendary,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 67,
      "PlanetId": 78,
      "Name": "Cormund",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 68,
      "PlanetId": 79,
      "Name": "Everra",
      "Resources": 3,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 69,
      "PlanetId": 80,
      "Name": "Accoen",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 69,
      "PlanetId": 81,
      "Name": "Jeol Ir",
      "Resources": 2,
      "Influence": 3,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 70,
      "PlanetId": 82,
      "Name": "Kraag",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 70,
      "PlanetId": 83,
      "Name": "Siig",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 71,
      "PlanetId": 84,
      "Name": "Ba'Kal",
      "Resources": 3,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 71,
      "PlanetId": 85,
      "Name": "Alio Prima",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 72,
      "PlanetId": 86,
      "Name": "Lisis",
      "Resources": 2,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 72,
      "PlanetId": 87,
      "Name": "Velnor",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Warfare
    },
    {
      "SystemId": 73,
      "PlanetId": 88,
      "Name": "Cealdri",
      "Resources": 0,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural,
      Specialty: Specialty.Cybernetics
    },
    {
      "SystemId": 73,
      "PlanetId": 89,
      "Name": "Xanhact",
      "Resources": 0,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 74,
      "PlanetId": 90,
      "Name": "Vega Major",
      "Resources": 2,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 74,
      "PlanetId": 91,
      "Name": "Vega Minor",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural,
      Specialty: Specialty.Propulsion
    },
    {
      "SystemId": 75,
      "PlanetId": 92,
      "Name": "Loki",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 75,
      "PlanetId": 93,
      "Name": "Abaddon",
      "Resources": 1,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 75,
      "PlanetId": 94,
      "Name": "Ashtroth",
      "Resources": 2,
      "Influence": 0,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 76,
      "PlanetId": 95,
      "Name": "Rigel I",
      "Resources": 0,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Hazardous
    },
    {
      "SystemId": 76,
      "PlanetId": 96,
      "Name": "Rigel II",
      "Resources": 1,
      "Influence": 2,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial
    },
    {
      "SystemId": 76,
      "PlanetId": 97,
      "Name": "Rigel III",
      "Resources": 1,
      "Influence": 1,
      PlanetType: PlanetType.Normal,
      Trait: Trait.Industrial,
      Specialty: Specialty.Biotic
    },
    {
      "SystemId": 82,
      "PlanetId": 98,
      "Name": "Mallice",
      "Resources": 0,
      "Influence": 3,
      PlanetType: PlanetType.Legendary,
      Trait: Trait.Cultural
    },
    {
      "SystemId": 83,
      "PlanetId": 99,
      "Name": "Mallice",
      "Resources": 0,
      "Influence": 3,
      PlanetType: PlanetType.Legendary,
      Trait: Trait.Cultural
    }
  ];

export {
  PlanetData
}
