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
    systemId: number;
    planetId: number;
    name: string;
    resources: number;
    influence: number;
    planetType: PlanetType;
    trait?: Trait;
    specialty?: Specialty;
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
    systemId: number | string;
    factionId?: number;
    name: string;
    baseGame: boolean;
    pok: boolean;
    wormholes: Wormhole[];
    systemType: SystemType;
    emptySystem: boolean;
    unique?: UniqueTile;
    anomaly?: Anomaly;
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

export interface Position {
    x: number;
    y: number;
}

export interface SystemI {
    /// The System data identifier
    systemId: string | number;
    /// Both graphically and logically
    position: Position;
    /// The systems that are adjacent
    adjacencies?: number[];
    /// Default should be true
    canOccupy?: boolean;
    isLegendary?: boolean;
    planetIds?: number[];
}

export interface SpaceCannon {
    dice: number;
    hit: number;
}

export interface AttachmentI {
    name: string;
    extraResources?: number;
    extraInfluence?: number;
    extraTraits?: Trait[];
    canOccupy?: boolean;
    isLegendary?: boolean;
    spaceCannon?: SpaceCannon;
}

export interface PlanetI {
    planetId: number;
    systemId: number;
    resources: number;
    influence: number;
    /// If unspecified, default to underlying planet
    traitOverride?: Trait[];
    /// If unspecified, default to underlying planet
    specialtyOverride?: Specialty[];
    isLegendaryOverride?: boolean;
    canOccupy?: boolean;
    spaceCannon?: SpaceCannon;
    attachments?: AttachmentI;
}

export interface PlayerI {
    playerId: number;
    factionId: number;
    homeSystemId: number;
    handActionCardCount: number;
    handPromissoryNoteCount: number;
    handSecretObjectiveCount: number;
    technologyIds: number[];
    points: number;
    scoredSecretObjectiveIds: number[];
    scoredPublicObjectiveIds: number[];
    faceUpPromissoryNoteIds: number[];
    strategyCardId: number | null;
}


export interface PublicGalaxy {
    planets: { [n: number]: PlanetI }
    systems: { [n: number | string]: SystemI }
    players: { [n: number]: PlayerI }
}


