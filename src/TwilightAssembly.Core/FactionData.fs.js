import { ofArray, singleton } from "../../front/src/.fable/fable-library.3.2.9/List.js";
import { Factions, Faction } from "./Types.fs.js";

function create_faction(factionId, name, baseGame, faction) {
    return new Faction(factionId, name, faction, baseGame, true, singleton(factionId));
}

export const Default = ofArray([create_faction(1, "The Federation of Sol", true, new Factions(0)), create_faction(2, "The Mentak Coalition", true, new Factions(1)), create_faction(3, "The Yin Brotherhood", true, new Factions(2)), create_faction(4, "The Embers of Muaat", true, new Factions(3)), create_faction(5, "The Arborec", true, new Factions(4)), create_faction(6, "The Lizix Mindnet", true, new Factions(5)), create_faction(7, "The Winnu", true, new Factions(6)), create_faction(8, "The Nekro Virus", true, new Factions(7)), create_faction(9, "The Naalu Collective", true, new Factions(8)), create_faction(10, "The Barony of Letnev", true, new Factions(9)), create_faction(11, "The Clan of Saar", true, new Factions(10)), create_faction(12, "The Universities of Jol-Nar", true, new Factions(11)), create_faction(13, "Sardakk N\u0027orr", true, new Factions(12)), create_faction(14, "The Xxcha Kingdom", true, new Factions(13)), create_faction(15, "The Yssaril Tribes", true, new Factions(14)), create_faction(16, "The Emirates of Hacan", true, new Factions(15)), (() => {
    const inputRecord = create_faction(17, "The Ghosts of Creuss", true, new Factions(16));
    return new Faction(inputRecord.FactionId, inputRecord.Name, inputRecord.Faction, inputRecord.BaseGame, inputRecord.POK, singleton(51));
})(), create_faction(52, "The Mahact Gene-sorcerers", false, new Factions(17)), create_faction(53, "The Nomad", false, new Factions(18)), create_faction(54, "The Vuil\u0027raith Cabal", false, new Factions(19)), create_faction(55, "The Titans of Ul", false, new Factions(20)), create_faction(56, "The Empyrean", false, new Factions(21)), create_faction(57, "The Naaz-Rokha Alliance", false, new Factions(22)), create_faction(58, "The Argent Flight", false, new Factions(23))]);

