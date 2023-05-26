import {
  Anomaly,
  PlanetType,
  Specialty,
  StrategyCard,
  Trait,
  Wormhole,
} from "./const";
import { Force, Reinforcements } from "./static";

export interface Position {
  x: number;
  y: number;
}

export interface AdjacencyOverride {
  playerId: number;
  adjacencies: number[];
  neighbors: number[];
}

/** Wire serialized */
export interface StrategyCardI {
  cardId: StrategyCard;
  tradeGoods: number;
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
  // adjacencyOverride: AdjacencyOverride[];
  /** Default should be true */
  canOccupy: boolean;
  wormholes: Wormhole[];
  frontierToken: boolean;
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
  exhausted: boolean;
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
  exhaustedTechnologyIds: number[];
  leaderIds: number[];
  unlockedLeaderIds: number[];
  exhaustedLeaderIds: number[];
  unitTechnology: UnitTechnologyI;
  reinforcements: Reinforcements;
  points: number;
  currentCommodity: number;
  maxCommodity: number;
  maxSecretObjectives: number;
  scoredSecretObjectiveIds: number[];
  scoredPublicObjectiveIds: number[];
  faceUpPromissoryNoteIds: number[];
  faceUpRelicIds: number[];
  strategyCardIds: number[];
  exhaustedStrategyCardIds: number[];
  planetIds: number[];
  tacticalTokens: Tokens[];
  strategyTokens: Tokens[];
  fleetTokens: Tokens[];
  fleetCapacity: number;
}

export interface ForceI extends Force {
  systemId: number;
  planetId: number | null;
  playerId: number;
}

export interface Tokens {
  playerId: number;
  count: number;
}

export interface PublicGalaxy {
  planets: { [planetId: number]: PlanetI };
  systems: { [systemId: number]: SystemI };
  players: { [playerId: number]: PlayerI };
  forces: { [systemId: number]: ForceI[] };
  activeLawIds: number[];
  speakerOrder: number[];
  initiativeOrder: number[];
  strategyCards: { [strategyCardId: number]: StrategyCardI };
}

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
