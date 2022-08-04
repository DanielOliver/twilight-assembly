export enum PlanetType {
  Home = 1,
  Normal,
  MecatolRex,
  Legendary,
}

export enum Trait {
  Cultural = 1,
  Industrial,
  Hazardous,
}

export enum Specialty {
  Cybernetics = 1,
  Biotic,
  Propulsion,
  Warfare,
}

/**
 * Static definition not sent over wire.
 */
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
  Gamma,
  IonStormAlpha,
  IonStormBeta,
}

export enum SystemType {
  Blue = 1,
  Red,
  Green,
}

export enum Anomaly {
  AsteroidField = 1,
  Nebula,
  Supernova,
  GravityRift,
  MuaatSupernova,
}

export enum UniqueTile {
  MecatolRex = 1,
  GhostsHomeSystem,
  GhostsSliceSystem,
  MalliceStartingSide,
  MalliceFlippedSide,
  HopesEnd,
  Primor,
  Mirage,
}

/**
 * Static definition not sent over wire.
 */
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
  RevealPublicObjectives,
}

export enum GameCreationDraftType {
  TtsString = 1,
  TtsStringRandomPlacement,
}

export enum StrategyCard {
  Leadership = 1,
  Diplomacy,
  Politics,
  Trade,
  Construction,
  Warfare,
  Technology,
  Imperial,
}

export interface Position {
  x: number;
  y: number;
}

/** Wire serialized */
export interface SystemI {
  systemId: number;
  /** Both graphically and logically */
  position: Position;
  /** The systems that are adjacent for movement purposes */
  adjacencies: number[];
  /** Virtual adjacencies are not supportable for movement purposes but support neighbors. */
  neighbors: number[];
  /** Some factions may do weird things, cough cough GHOSTS! */
  adjacencyOverride: AdjacencyOverride[];
  /** Default should be true */
  canOccupy: boolean;
  wormholes: Wormhole[];
  homeSystem: boolean;
  legendary: boolean;
  mecatolRex: boolean;
  emptySystem: boolean;
  anomalies: Anomaly[];
  planetIds: number[];
  /** PlayerIds with tokens */
  tokens: number[];
}

export interface SpaceCannon {
  dice: number;
  hit: number;
}

export interface AttachmentI {
  name: string;
  extraResources: number;
  extraInfluence: number;
  extraTraits: Trait[];
  canOccupy: boolean;
  legendary: boolean;
  spaceCannon: SpaceCannon | null;
}

export interface PlanetI {
  planetId: number;
  systemId: number;
  PlayerId: number | null;
  resources: number;
  influence: number;
  traits: Trait[];
  specialties: Specialty[];
  planetType: PlanetType;
  canOccupy: boolean;
  spaceCannon: SpaceCannon[];
  attachments: AttachmentI[];
}

export interface UnitTechnologyI {
  carriers: number;
  cruisers: number;
  destroyers: number;
  dreadnoughts: number;
  factory: number;
  fighters: number;
  flagship: number;
  infantry: number;
  mechs: number;
  pds: number;
  warsuns: number;
}

export interface PlayerI {
  playerId: number;
  factionId: number;
  homeSystemId: number;
  handActionCardCount: number;
  handPromissoryNoteCount: number;
  handSecretObjectiveCount: number;
  technologyIds: number[];
  unitTechnology: UnitTechnologyI;
  reinforcements: Reinforcements;
  points: number;
  scoredSecretObjectiveIds: number[];
  scoredPublicObjectiveIds: number[];
  faceUpPromissoryNoteIds: number[];
  faceUpRelicIds: number[];
  strategyCardId: number | null;
  planetIds: number[];
  tacticalTokens: number;
  strategyTokens: number;
  fleetTokens: number;
  fleetCapacity: number;
}

export interface Force {
  carriers: number;
  cruisers: number;
  destroyers: number;
  dreadnoughts: number;
  factory: number;
  fighters: number;
  flagship: number;
  infantry: number;
  mechs: number;
  pds: number;
  warsuns: number;
}

export enum ForceStatus {
  Defending = 1,
  Invading,
}

export enum ForceLocation {
  Space = 1,
  Ground,
}

export interface ForceI extends Force {
  systemId: number;
  planetId: number | null;
  playerId: number;
}

export interface Reinforcements extends Force {
  tokens: number;
}

export interface StrategyCardI {
  cardId: StrategyCard;
  tradeGoods: number;
}

export interface AdjacencyOverride {
  playerId: number;
  adjacencies: number[];
  neighbors: number[];
}

export interface PublicGalaxy {
  planets: { [planetId: number]: PlanetI; _c: PublicGalaxyField.Planet };
  systems: {
    _c: PublicGalaxyField.System;
    [systemId: number]: SystemI;
  };
  players: { [playerId: number]: PlayerI; _c: PublicGalaxyField.Player };
  forces: { [systemId: number]: ForceI[]; _c: PublicGalaxyField.Force };
  // /** 9x9 grid of SystemIds */
  // grid: (number | null)[];
  activeLawIds: number[];
  speakerOrder: number[];
  initiativeOrder: number[];
  status: GalaxyStatus;
  strategyCards: {
    [strategyCardId: number]: StrategyCardI;
    _c: PublicGalaxyField.StrategyCard;
  };
}

export enum PublicGalaxyField {
  Planet = 1,
  System,
  Player,
  Force,
  ActiveLaw,
  SpeakerOrder,
  InitiativeOrder,
  Status,
  StrategyCard,
}

export type PublicGalaxyDiff =
  | KeyDiff<PlanetI, PublicGalaxyField.Planet>
  | KeyDiff<SystemI, PublicGalaxyField.System>
  | KeyDiff<PlayerI, PublicGalaxyField.Player>
  | KeyDiff<Force, PublicGalaxyField.Force>
  | ({ c: PublicGalaxyField.ActiveLaw } & Difference<number[]>)
  | ({ c: PublicGalaxyField.SpeakerOrder } & Difference<number[]>)
  | ({ c: PublicGalaxyField.InitiativeOrder } & Difference<number[]>)
  | ({ c: PublicGalaxyField.Status } & Difference<GalaxyStatus>)
  | ({ c: PublicGalaxyField.StrategyCard } & Difference<StrategyCardI>);

export interface SecretPlayerGalaxy {
  playerId: number;
  secretObjectiveIdsInHand: number[];
  promissoryNoteIdsInHand: number[];
  actionCardIdsInHand: number[];
}

export interface SecretGalaxy {
  playerSecrets: { [playerId: number]: SecretPlayerGalaxy };
  explorationDeckIds: number[];
  actionCardDeckIds: number[];
  relicDeckIds: number[];
  secretObjectiveDeckIds: number[];
  publicObjectiveDeckIds: number[];
  agendaDeckIds: number[];
  /** Use this in the future: https://github.com/davidbau/seedrandom */
  randomState: object;
}

export enum Phase {
  Strategy = 1,
  Action,
  Status,
  Agenda,
}

export enum StrategyPhaseTimingWindow {
  Init = 1,
  WhenPlayerChooses,
  StartOfPhase,
  WaitingOnPlayerChoice,
}

export interface StrategyPhaseTimingStartOfPhase {
  window: StrategyPhaseTimingWindow.StartOfPhase;
  remainingPlayerIds: number[];
}

export interface StrategyPhaseTimingWhenPlayerChooses {
  window: StrategyPhaseTimingWindow.WhenPlayerChooses;
  strategyCardId: number;
  playerId: number;
  remainingPlayerIds: number[];
}

export interface StrategyPhaseTimingInit {
  window: StrategyPhaseTimingWindow.Init;
}

export interface StrategyPhaseTimingWaitingOnPlayerChoice {
  window: StrategyPhaseTimingWindow.WaitingOnPlayerChoice;
  playerId: number;
}

export type StrategyPhaseTiming =
  | StrategyPhaseTimingWhenPlayerChooses
  | StrategyPhaseTimingStartOfPhase
  | StrategyPhaseTimingInit
  | StrategyPhaseTimingWaitingOnPlayerChoice;

export interface StrategyPhaseStatus {
  phase: Phase.Strategy;
  timing: StrategyPhaseTiming;
  remainingStrategyCardIds: number[];
  remainingPlayerIds: number[];
}

export interface ActionPhaseStatus {
  phase: Phase.Action;
  waitingOnPlayerId: number;
}

export interface StatusPhaseStatus {
  phase: Phase.Status;
  waitingOnPlayerId: number;
}

export interface AgendaPhaseStatus {
  phase: Phase.Agenda;
  waitingOnPlayerId: number;
}

export type GalaxyStatus =
  | StrategyPhaseStatus
  | ActionPhaseStatus
  | StatusPhaseStatus
  | AgendaPhaseStatus;

export enum Requests {
  ActivateSystem = 1,
}

export interface RequestActivateSystem {
  type: Requests.ActivateSystem;
  systemId: number;
  playerId: number;
}

export type RequestGalaxy = RequestActivateSystem;

export interface ActivateSystemEvent {
  eventType: Requests.ActivateSystem;
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

export type CoreEvent = ActivateSystemEvent | StrategyCardPrimaryEvent;

export interface Difference<T> {
  old: Partial<T>;
  next: Partial<T>;
}

export enum KeyDiffType {
  Update = 1,
  Set,
  Remove,
}

export interface KeyDiffUpdate<T, TColl> extends Difference<T> {
  c: TColl;
  type: KeyDiffType.Update;
  key: number | string;
}

export interface KeyDiffSet<T, TColl> {
  c: TColl;
  type: KeyDiffType.Set;
  key: number | string;
  next: T;
}

export interface KeyDiffRemove<T, TColl> {
  c: TColl;
  type: KeyDiffType.Remove;
  key: number | string;
  old: T;
}

export type KeyDiff<T, TColl> =
  | KeyDiffUpdate<T, TColl>
  | KeyDiffRemove<T, TColl>
  | KeyDiffSet<T, TColl>;
