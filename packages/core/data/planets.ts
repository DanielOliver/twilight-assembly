import { Planet } from "../types/static";
import { PlanetType, Trait, Specialty } from "../types/const";

const PlanetData: Planet[] = [
  {
    systemId: 1,
    planetId: 1,
    name: "Jord",
    resources: 4,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 2,
    planetId: 2,
    name: "Moll Primus",
    resources: 4,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 3,
    planetId: 3,
    name: "Darien",
    resources: 4,
    influence: 4,
    planetType: PlanetType.Home,
  },
  {
    systemId: 4,
    planetId: 4,
    name: "Muaat",
    resources: 4,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 5,
    planetId: 5,
    name: "Nestphar",
    resources: 3,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 6,
    planetId: 6,
    name: "[0.0.0]",
    resources: 5,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 7,
    planetId: 7,
    name: "Winnu",
    resources: 3,
    influence: 4,
    planetType: PlanetType.Home,
  },
  {
    systemId: 8,
    planetId: 8,
    name: "Mordai II",
    resources: 4,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 9,
    planetId: 9,
    name: "Maaluuk",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 9,
    planetId: 10,
    name: "Druaa",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 10,
    planetId: 11,
    name: "Arc Prime",
    resources: 4,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 10,
    planetId: 12,
    name: "Wren Terra",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 11,
    planetId: 13,
    name: "Lisis II",
    resources: 1,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 11,
    planetId: 14,
    name: "Ragh",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 12,
    planetId: 15,
    name: "Nar",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Home,
  },
  {
    systemId: 12,
    planetId: 16,
    name: "Jol",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 13,
    planetId: 17,
    name: "Tren'lak",
    resources: 1,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 13,
    planetId: 18,
    name: "Quinarra",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 14,
    planetId: 19,
    name: "Archon Ren",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Home,
  },
  {
    systemId: 14,
    planetId: 20,
    name: "Archon Tau",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 15,
    planetId: 21,
    name: "Retillion",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Home,
  },
  {
    systemId: 15,
    planetId: 22,
    name: "Shalloq",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 16,
    planetId: 23,
    name: "Arretze",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 16,
    planetId: 24,
    name: "Hercant",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 16,
    planetId: 25,
    name: "Kamdorn",
    resources: 0,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 18,
    planetId: 26,
    name: "Mecatol Rex",
    resources: 1,
    influence: 6,
    planetType: PlanetType.MecatolRex,
  },
  {
    systemId: 19,
    planetId: 27,
    name: "Wellon",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Cybernetics,
  },
  {
    systemId: 20,
    planetId: 28,
    name: "Vefut II",
    resources: 2,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 21,
    planetId: 29,
    name: "Thibah",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Propulsion,
  },
  {
    systemId: 22,
    planetId: 30,
    name: "Tar'mann",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Biotic,
  },
  {
    systemId: 23,
    planetId: 31,
    name: "Saudor",
    resources: 2,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 24,
    planetId: 32,
    name: "Mehar Xull",
    resources: 1,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
    specialty: Specialty.Warfare,
  },
  {
    systemId: 25,
    planetId: 33,
    name: "Quann",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 26,
    planetId: 34,
    name: "Lodor",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 27,
    planetId: 35,
    name: "New Albion",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Biotic,
  },
  {
    systemId: 27,
    planetId: 36,
    name: "Starpoint",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 28,
    planetId: 37,
    name: "Tequ'ran",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 28,
    planetId: 38,
    name: "Torkan",
    resources: 0,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 29,
    planetId: 39,
    name: "Qucen'n",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 29,
    planetId: 40,
    name: "Rarron",
    resources: 0,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 30,
    planetId: 41,
    name: "Mellon",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 30,
    planetId: 42,
    name: "Zohbat",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 31,
    planetId: 43,
    name: "Lazar",
    resources: 1,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Cybernetics,
  },
  {
    systemId: 31,
    planetId: 44,
    name: "Sakulag",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 32,
    planetId: 45,
    name: "Dal Bootha",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 32,
    planetId: 46,
    name: "Xxehan",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 33,
    planetId: 47,
    name: "Corneeq",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 33,
    planetId: 48,
    name: "Resculon",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 34,
    planetId: 49,
    name: "Centauri",
    resources: 1,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 34,
    planetId: 50,
    name: "Gral",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Propulsion,
  },
  {
    systemId: 35,
    planetId: 51,
    name: "Bereg",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 35,
    planetId: 52,
    name: "Lirta IV",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 36,
    planetId: 53,
    name: "Arnor",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 36,
    planetId: 54,
    name: "Lor",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 37,
    planetId: 55,
    name: "Arinam",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 37,
    planetId: 56,
    name: "Meer",
    resources: 0,
    influence: 4,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
    specialty: Specialty.Warfare,
  },
  {
    systemId: 38,
    planetId: 57,
    name: "Abyz",
    resources: 3,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 38,
    planetId: 58,
    name: "Fria",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 51,
    planetId: 59,
    name: "Creuss",
    resources: 4,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 52,
    planetId: 60,
    name: "Ixth",
    resources: 3,
    influence: 5,
    planetType: PlanetType.Home,
  },
  {
    systemId: 53,
    planetId: 61,
    name: "Arcturus",
    resources: 4,
    influence: 4,
    planetType: PlanetType.Home,
  },
  {
    systemId: 54,
    planetId: 62,
    name: "Acheron",
    resources: 4,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 55,
    planetId: 63,
    name: "Elysium",
    resources: 4,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 56,
    planetId: 64,
    name: "The Dark",
    resources: 3,
    influence: 4,
    planetType: PlanetType.Home,
  },
  {
    systemId: 57,
    planetId: 65,
    name: "Naazir",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 57,
    planetId: 66,
    name: "Rokha",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 58,
    planetId: 67,
    name: "Valk",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Home,
  },
  {
    systemId: 58,
    planetId: 68,
    name: "Avar",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Home,
  },
  {
    systemId: 58,
    planetId: 69,
    name: "Ylir",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Home,
  },
  {
    systemId: 59,
    planetId: 70,
    name: "Archon Vail",
    resources: 1,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
    specialty: Specialty.Propulsion,
  },
  {
    systemId: 60,
    planetId: 71,
    name: "Perimeter",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 61,
    planetId: 72,
    name: "Ang",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Warfare,
  },
  {
    systemId: 62,
    planetId: 73,
    name: "Sem-Lore",
    resources: 3,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
    specialty: Specialty.Cybernetics,
  },
  {
    systemId: 63,
    planetId: 74,
    name: "Vorhal",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
    specialty: Specialty.Biotic,
  },
  {
    systemId: 64,
    planetId: 75,
    name: "Atlas",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 65,
    planetId: 76,
    name: "Primor",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Legendary,
    trait: Trait.Cultural,
  },
  {
    systemId: 66,
    planetId: 77,
    name: "Hope's End",
    resources: 3,
    influence: 0,
    planetType: PlanetType.Legendary,
    trait: Trait.Hazardous,
  },
  {
    systemId: 67,
    planetId: 78,
    name: "Cormund",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 68,
    planetId: 79,
    name: "Everra",
    resources: 3,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 69,
    planetId: 80,
    name: "Accoen",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 69,
    planetId: 81,
    name: "Jeol Ir",
    resources: 2,
    influence: 3,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 70,
    planetId: 82,
    name: "Kraag",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 70,
    planetId: 83,
    name: "Siig",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 71,
    planetId: 84,
    name: "Ba'Kal",
    resources: 3,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 71,
    planetId: 85,
    name: "Alio Prima",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 72,
    planetId: 86,
    name: "Lisis",
    resources: 2,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 72,
    planetId: 87,
    name: "Velnor",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Warfare,
  },
  {
    systemId: 73,
    planetId: 88,
    name: "Cealdri",
    resources: 0,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
    specialty: Specialty.Cybernetics,
  },
  {
    systemId: 73,
    planetId: 89,
    name: "Xanhact",
    resources: 0,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 74,
    planetId: 90,
    name: "Vega Major",
    resources: 2,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 74,
    planetId: 91,
    name: "Vega Minor",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
    specialty: Specialty.Propulsion,
  },
  {
    systemId: 75,
    planetId: 92,
    name: "Loki",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 75,
    planetId: 93,
    name: "Abaddon",
    resources: 1,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Cultural,
  },
  {
    systemId: 75,
    planetId: 94,
    name: "Ashtroth",
    resources: 2,
    influence: 0,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 76,
    planetId: 95,
    name: "Rigel I",
    resources: 0,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Hazardous,
  },
  {
    systemId: 76,
    planetId: 96,
    name: "Rigel II",
    resources: 1,
    influence: 2,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
  },
  {
    systemId: 76,
    planetId: 97,
    name: "Rigel III",
    resources: 1,
    influence: 1,
    planetType: PlanetType.Normal,
    trait: Trait.Industrial,
    specialty: Specialty.Biotic,
  },
  {
    systemId: 82,
    planetId: 98,
    name: "Mallice",
    resources: 0,
    influence: 3,
    planetType: PlanetType.Legendary,
    trait: Trait.Cultural,
  },
  {
    systemId: 83,
    planetId: 99,
    name: "Mallice",
    resources: 0,
    influence: 3,
    planetType: PlanetType.Legendary,
    trait: Trait.Cultural,
  },
];

export default PlanetData;
