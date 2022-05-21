import { Record, Union } from "../../front/src/.fable/fable-library.3.2.9/Types.js";
import { record_type, list_type, bool_type, string_type, option_type, int32_type, union_type } from "../../front/src/.fable/fable-library.3.2.9/Reflection.js";

export class Wormhole extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Alpha", "Beta", "Delta", "Gamma"];
    }
}

export function Wormhole$reflection() {
    return union_type("TwilightAssembly.Core.Wormhole", [], Wormhole, () => [[], [], [], []]);
}

export class Trait extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Cultural", "Industrial", "Hazardous"];
    }
}

export function Trait$reflection() {
    return union_type("TwilightAssembly.Core.Trait", [], Trait, () => [[], [], []]);
}

export class Specialty extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Cybernetics", "Biotic", "Propulsion", "Warfare"];
    }
}

export function Specialty$reflection() {
    return union_type("TwilightAssembly.Core.Specialty", [], Specialty, () => [[], [], [], []]);
}

export class Anomaly extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["AsteroidField", "Nebula", "Supernova", "GravityRift", "MuaatSupernova"];
    }
}

export function Anomaly$reflection() {
    return union_type("TwilightAssembly.Core.Anomaly", [], Anomaly, () => [[], [], [], [], []]);
}

export function Anomaly__get_Readable(this$) {
    switch (this$.tag) {
        case 2: {
            return "Supernova";
        }
        case 0: {
            return "Asteroid Field";
        }
        case 4: {
            return "Muaat Supernova";
        }
        case 3: {
            return "Gravity Rift";
        }
        default: {
            return "Nebula";
        }
    }
}

export class SystemType extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Blue", "Red", "Green"];
    }
}

export function SystemType$reflection() {
    return union_type("TwilightAssembly.Core.SystemType", [], SystemType, () => [[], [], []]);
}

export class UniqueTile extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["MecatolRex", "GhostsHomeSystem", "GhostsSliceSystem", "MalliceStartingSide", "MalliceFlippedSide", "HopesEnd", "Primor", "Mirage"];
    }
}

export function UniqueTile$reflection() {
    return union_type("TwilightAssembly.Core.UniqueTile", [], UniqueTile, () => [[], [], [], [], [], [], [], []]);
}

export class SystemTile extends Record {
    constructor(SystemId, FactionId, Name, BaseGame, POK, Anomaly, Wormholes, SystemType, EmptySystem, Unique) {
        super();
        this.SystemId = (SystemId | 0);
        this.FactionId = FactionId;
        this.Name = Name;
        this.BaseGame = BaseGame;
        this.POK = POK;
        this.Anomaly = Anomaly;
        this.Wormholes = Wormholes;
        this.SystemType = SystemType;
        this.EmptySystem = EmptySystem;
        this.Unique = Unique;
    }
}

export function SystemTile$reflection() {
    return record_type("TwilightAssembly.Core.SystemTile", [], SystemTile, () => [["SystemId", int32_type], ["FactionId", option_type(int32_type)], ["Name", string_type], ["BaseGame", bool_type], ["POK", bool_type], ["Anomaly", option_type(Anomaly$reflection())], ["Wormholes", list_type(Wormhole$reflection())], ["SystemType", SystemType$reflection()], ["EmptySystem", bool_type], ["Unique", option_type(UniqueTile$reflection())]]);
}

export function SystemTile__get_IsRedBorder(this$) {
    const matchValue = this$.SystemType;
    switch (matchValue.tag) {
        case 2:
        case 1: {
            return this$.Anomaly != null;
        }
        default: {
            return false;
        }
    }
}

export function SystemTile__get_HasLegendaryPlanet(this$) {
    const matchValue = this$.Unique;
    if (matchValue != null) {
        const unique = matchValue;
        switch (unique.tag) {
            case 3:
            case 4:
            case 6:
            case 5:
            case 7: {
                return true;
            }
            default: {
                return false;
            }
        }
    }
    else {
        return false;
    }
}

export class PlanetType extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Legendary", "Home", "Normal", "MecatolRex"];
    }
}

export function PlanetType$reflection() {
    return union_type("TwilightAssembly.Core.PlanetType", [], PlanetType, () => [[], [], [], []]);
}

export class Planet extends Record {
    constructor(SystemId, PlanetId, Name, Resources, Influence, PlanetType, Trait, Specialty) {
        super();
        this.SystemId = SystemId;
        this.PlanetId = (PlanetId | 0);
        this.Name = Name;
        this.Resources = (Resources | 0);
        this.Influence = (Influence | 0);
        this.PlanetType = PlanetType;
        this.Trait = Trait;
        this.Specialty = Specialty;
    }
}

export function Planet$reflection() {
    return record_type("TwilightAssembly.Core.Planet", [], Planet, () => [["SystemId", option_type(int32_type)], ["PlanetId", int32_type], ["Name", string_type], ["Resources", int32_type], ["Influence", int32_type], ["PlanetType", PlanetType$reflection()], ["Trait", option_type(Trait$reflection())], ["Specialty", option_type(Specialty$reflection())]]);
}

export class Factions extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["FederationOfSol", "MentakCoalition", "YinBrotherhood", "EmbersOfMuaat", "Arborec", "LizixMindnet", "Winnu", "NekroVirus", "NaaluCollective", "BaronyOfLetnev", "ClanOfSaar", "UniversitiesOfJolNar", "SardakkNorr", "XxchaKingdom", "YssarilTribes", "EmiratesOfHacan", "GhostsOfCreuss", "MahactGeneSorcerers", "Nomad", "VuilraithCabal", "TitansOfUl", "Empyrean", "NaazRokhaAlliance", "ArgentFlight"];
    }
}

export function Factions$reflection() {
    return union_type("TwilightAssembly.Core.Factions", [], Factions, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);
}

export class Faction extends Record {
    constructor(FactionId, Name, Faction, BaseGame, POK, HomeSystemIds) {
        super();
        this.FactionId = (FactionId | 0);
        this.Name = Name;
        this.Faction = Faction;
        this.BaseGame = BaseGame;
        this.POK = POK;
        this.HomeSystemIds = HomeSystemIds;
    }
}

export function Faction$reflection() {
    return record_type("TwilightAssembly.Core.Faction", [], Faction, () => [["FactionId", int32_type], ["Name", string_type], ["Faction", Factions$reflection()], ["BaseGame", bool_type], ["POK", bool_type], ["HomeSystemIds", list_type(int32_type)]]);
}

