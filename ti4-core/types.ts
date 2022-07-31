export enum PlanetType {
    Home = 1,
    Normal,
    MecatolRex,
    Legendary
}

export enum Trait {
    Cultural = 1,
    Industrial,
    Hazardous
}

export enum Specialty {
    Cybernetics = 1,
    Biotic,
    Propulsion,
    Warfare
}

export interface Planet {
    SystemId: number;
    PlanetId: number;
    Name: string;
    Resources: number;
    Influence: number;    
    PlanetType: PlanetType;
    Trait?: Trait;
    Specialty?: Specialty;
}

export enum Wormhole {
    Alpha = 1,
    Beta,
    Delta,
    Gamma
}

export enum SystemType {
    Blue = 1,
    Red,
    Green
}

export enum Anomaly {
    AsteroidField = 1,
    Nebula,
    Supernova,
    GravityRift,
    MuaatSupernova
}

export enum UniqueTile {
    MecatolRex = 1,
    GhostsHomeSystem,
    GhostsSliceSystem,
    MalliceStartingSide,
    MalliceFlippedSide,
    HopesEnd,
    Primor,
    Mirage
}

export interface System {
    SystemId: number;
    FactionId?: number;
    Name: string;
    BaseGame: boolean;
    POK: boolean;
    Wormholes: Wormhole[]; 
    SystemType: SystemType;
    EmptySystem: boolean;
    Unique?: UniqueTile;
    Anomaly?: Anomaly;
}

export enum GameCreationState {
    NameTheGame = 1,
    TellDraftType,
    TellParticipants,
    TellMap,
    TellFactions,
    TellSeatingOrder,
    TellStrategyCardPickOrder,
    TellOptionalFactionChoices,
    PickSecretObjectives,
    RevealPublicObjectives
}

export enum GameCreationDraftType {
    TtsString = 1,
    TtsStringRandomPlacement,
}

