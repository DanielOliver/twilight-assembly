import { Specialty, Trait, Planet, PlanetType as PlanetType_4 } from "./Types.fs.js";
import { ofArray } from "../../front/src/.fable/fable-library.3.2.9/List.js";

function create_home_planet(systemId, planetId, name, resources, influence) {
    return new Planet(systemId, planetId, name, resources, influence, new PlanetType_4(1), void 0, void 0);
}

function create_planet(systemId, planetId, name, resources, influence, planetTrait, specialty) {
    return new Planet(systemId, planetId, name, resources, influence, new PlanetType_4(2), planetTrait, specialty);
}

export const Default = ofArray([create_home_planet(1, 1, "Jord", 4, 2), create_home_planet(2, 2, "Moll Primus", 4, 1), create_home_planet(3, 3, "Darien", 4, 4), create_home_planet(4, 4, "Muaat", 4, 1), create_home_planet(5, 5, "Nestphar", 3, 2), create_home_planet(6, 6, "[0.0.0]", 5, 0), create_home_planet(7, 7, "Winnu", 3, 4), create_home_planet(8, 8, "Mordai II", 4, 0), create_home_planet(9, 9, "Maaluuk", 0, 2), create_home_planet(9, 10, "Druaa", 3, 1), create_home_planet(10, 11, "Arc Prime", 4, 0), create_home_planet(10, 12, "Wren Terra", 2, 1), create_home_planet(11, 13, "Lisis II", 1, 0), create_home_planet(11, 14, "Ragh", 2, 1), create_home_planet(12, 15, "Nar", 2, 3), create_home_planet(12, 16, "Jol", 1, 2), create_home_planet(13, 17, "Tren\u0027lak", 1, 0), create_home_planet(13, 18, "Quinarra", 3, 1), create_home_planet(14, 19, "Archon Ren", 2, 3), create_home_planet(14, 20, "Archon Tau", 1, 1), create_home_planet(15, 21, "Retillion", 2, 3), create_home_planet(15, 22, "Shalloq", 1, 2), create_home_planet(16, 23, "Arretze", 2, 0), create_home_planet(16, 24, "Hercant", 1, 1), create_home_planet(16, 25, "Kamdorn", 0, 1), new Planet(18, 26, "Mecatol Rex", 1, 6, new PlanetType_4(3), void 0, void 0), create_planet(19, 27, "Wellon", 1, 2, new Trait(1), new Specialty(0)), create_planet(20, 28, "Vefut II", 2, 2, new Trait(2), void 0), create_planet(21, 29, "Thibah", 1, 1, new Trait(1), new Specialty(2)), create_planet(22, 30, "Tar\u0027mann", 1, 1, new Trait(1), new Specialty(1)), create_planet(23, 31, "Saudor", 2, 2, new Trait(1), void 0), create_planet(24, 32, "Mehar Xull", 1, 3, new Trait(2), new Specialty(3)), create_planet(25, 33, "Quann", 2, 1, new Trait(0), void 0), create_planet(26, 34, "Lodor", 3, 1, new Trait(0), void 0), create_planet(27, 35, "New Albion", 1, 1, new Trait(1), new Specialty(1)), create_planet(27, 36, "Starpoint", 3, 1, new Trait(2), void 0), create_planet(28, 37, "Tequ\u0027ran", 2, 0, new Trait(2), void 0), create_planet(28, 38, "Torkan", 0, 3, new Trait(0), void 0), create_planet(29, 39, "Qucen\u0027n", 1, 2, new Trait(1), void 0), create_planet(29, 40, "Rarron", 0, 3, new Trait(0), void 0), create_planet(30, 41, "Mellon", 0, 2, new Trait(0), void 0), create_planet(30, 42, "Zohbat", 3, 1, new Trait(2), void 0), create_planet(31, 43, "Lazar", 1, 0, new Trait(1), new Specialty(0)), create_planet(31, 44, "Sakulag", 2, 1, new Trait(2), void 0), create_planet(32, 45, "Dal Bootha", 0, 2, new Trait(0), void 0), create_planet(32, 46, "Xxehan", 1, 1, new Trait(0), void 0), create_planet(33, 47, "Corneeq", 1, 2, new Trait(0), void 0), create_planet(33, 48, "Resculon", 2, 0, new Trait(0), void 0), create_planet(34, 49, "Centauri", 1, 3, new Trait(0), void 0), create_planet(34, 50, "Gral", 1, 1, new Trait(1), new Specialty(2)), create_planet(35, 51, "Bereg", 3, 1, new Trait(2), void 0), create_planet(35, 52, "Lirta IV", 2, 3, new Trait(2), void 0), create_planet(36, 53, "Arnor", 2, 1, new Trait(1), void 0), create_planet(36, 54, "Lor", 1, 2, new Trait(1), void 0), create_planet(37, 55, "Arinam", 1, 2, new Trait(1), void 0), create_planet(37, 56, "Meer", 0, 4, new Trait(2), new Specialty(3)), create_planet(38, 57, "Abyz", 3, 0, new Trait(2), void 0), create_planet(38, 58, "Fria", 2, 0, new Trait(2), void 0), create_home_planet(51, 59, "Creuss", 4, 2), create_home_planet(52, 60, "Ixth", 3, 5), create_home_planet(53, 61, "Arcturus", 4, 4), create_home_planet(54, 62, "Acheron", 4, 0), create_home_planet(55, 63, "Elysium", 4, 1), create_home_planet(56, 64, "The Dark", 3, 4), create_home_planet(57, 65, "Naazir", 2, 1), create_home_planet(57, 66, "Rokha", 1, 2), create_home_planet(58, 67, "Valk", 2, 0), create_home_planet(58, 68, "Avar", 1, 1), create_home_planet(58, 69, "Ylir", 0, 2), create_planet(59, 70, "Archon Vail", 1, 3, new Trait(2), new Specialty(2)), create_planet(60, 71, "Perimeter", 2, 1, new Trait(1), void 0), create_planet(61, 72, "Ang", 2, 0, new Trait(1), new Specialty(3)), create_planet(62, 73, "Sem-Lore", 3, 2, new Trait(0), new Specialty(0)), create_planet(63, 74, "Vorhal", 0, 2, new Trait(0), new Specialty(1)), create_planet(64, 75, "Atlas", 3, 1, new Trait(2), void 0), (() => {
    const inputRecord = create_planet(65, 76, "Primor", 2, 1, new Trait(0), void 0);
    return new Planet(inputRecord.SystemId, inputRecord.PlanetId, inputRecord.Name, inputRecord.Resources, inputRecord.Influence, new PlanetType_4(0), inputRecord.Trait, inputRecord.Specialty);
})(), (() => {
    const inputRecord_1 = create_planet(66, 77, "Hope\u0027s End", 3, 0, new Trait(2), void 0);
    return new Planet(inputRecord_1.SystemId, inputRecord_1.PlanetId, inputRecord_1.Name, inputRecord_1.Resources, inputRecord_1.Influence, new PlanetType_4(0), inputRecord_1.Trait, inputRecord_1.Specialty);
})(), create_planet(67, 78, "Cormund", 2, 0, new Trait(2), void 0), create_planet(68, 79, "Everra", 3, 1, new Trait(0), void 0), create_planet(69, 80, "Accoen", 2, 3, new Trait(1), void 0), create_planet(69, 81, "Jeol Ir", 2, 3, new Trait(1), void 0), create_planet(70, 82, "Kraag", 2, 1, new Trait(2), void 0), create_planet(70, 83, "Siig", 0, 2, new Trait(2), void 0), create_planet(71, 84, "Ba\u0027Kal", 3, 2, new Trait(1), void 0), create_planet(71, 85, "Alio Prima", 1, 1, new Trait(0), void 0), create_planet(72, 86, "Lisis", 2, 2, new Trait(1), void 0), create_planet(72, 87, "Velnor", 2, 1, new Trait(1), new Specialty(3)), create_planet(73, 88, "Cealdri", 0, 2, new Trait(0), new Specialty(0)), create_planet(73, 89, "Xanhact", 0, 1, new Trait(2), void 0), create_planet(74, 90, "Vega Major", 2, 1, new Trait(0), void 0), create_planet(74, 91, "Vega Minor", 1, 2, new Trait(0), new Specialty(2)), create_planet(75, 92, "Loki", 1, 2, new Trait(0), void 0), create_planet(75, 93, "Abaddon", 1, 0, new Trait(0), void 0), create_planet(75, 94, "Ashtroth", 2, 0, new Trait(2), void 0), create_planet(76, 95, "Rigel I", 0, 1, new Trait(2), void 0), create_planet(76, 96, "Rigel II", 1, 2, new Trait(1), void 0), create_planet(76, 97, "Rigel III", 1, 1, new Trait(1), new Specialty(1)), (() => {
    const inputRecord_2 = create_planet(82, 98, "Mallice", 0, 3, new Trait(0), void 0);
    return new Planet(inputRecord_2.SystemId, inputRecord_2.PlanetId, inputRecord_2.Name, inputRecord_2.Resources, inputRecord_2.Influence, new PlanetType_4(0), inputRecord_2.Trait, inputRecord_2.Specialty);
})(), (() => {
    const inputRecord_3 = create_planet(83, 99, "Mallice", 0, 3, new Trait(0), void 0);
    return new Planet(inputRecord_3.SystemId, inputRecord_3.PlanetId, inputRecord_3.Name, inputRecord_3.Resources, inputRecord_3.Influence, new PlanetType_4(0), inputRecord_3.Trait, inputRecord_3.Specialty);
})()]);
