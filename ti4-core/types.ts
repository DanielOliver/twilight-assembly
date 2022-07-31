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
    technologyIds?: number[];
    points: number;
    scoredSecretObjectiveIds?: number[];
    scoredPublicObjectiveIds?: number[];
    faceUpPromissoryNoteIds?: number[];
    strategyCardId: number | null;
    planetIds?: number[];
    tacticalTokens: number;
    strategyTokens: number;
    fleetTokens: number;
    fleetCapacity: number;
}

export interface Force {
    carriers?: number;
    cruisers?: number;
    destroyers?: number;
    dreadnoughts?: number;
    factory?: number;
    fighters?: number;
    flagship?: number;
    infantry?: number;
    mechs?: number;
    pds?: number;
    warsuns?: number;
}

export enum ForceStatus {
    Defending = 1,
    Invading
}

export enum ForceLocation {
    Space = 1,
    Ground
}

export interface ForceI {
    systemId: number;
    planetId?: number;
    playerId: number;
}

export interface Reinforcements extends Force {
    tokens: number;
}

export interface PublicGalaxy {
    planets: { [planetId: number]: PlanetI; };
    systems: { [systemId: number | string]: SystemI; };
    players: { [playerId: number]: PlayerI; };
    forces: { [systemId: number]: ForceI[]; };
    // The player tokens on each system.
    tokens: { [systemId: number]: number[]; };
    // The player that owns each planet.
    planetOwnership: { [planetId: number]: number; };
    //9x9 grid of SystemIds
    grid: (number | null)[];
    reinforcements: { [playerId: number]: Reinforcements; };
}

export interface SecretPlayerGalaxy {
    playerId: number;
    secretObjectiveIdsInHand: number[];
    promissoryNoteIdsInHand: number[];
    actionCardIdsInHand: number[];
}

export interface SecretGalaxy {
    playerSecrets: { [playerId: number]: SecretPlayerGalaxy; };
}

export interface ActivateSystemEvent {
    eventType: "activateSystem";
    playerId: number;
    systemId: number;
    before: {
        containsToken: boolean;
    };
    now: {
        containsToken: boolean;
    };
}

export interface StrategyCardPrimaryEvent {
    eventType: "strategyCardPrimary";
    playerId: number;
    strategyCardId: number;
}

export type CoreEvent =
    ActivateSystemEvent |
    StrategyCardPrimaryEvent;

