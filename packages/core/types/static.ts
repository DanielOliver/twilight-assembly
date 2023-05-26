import {
  PlanetType,
  Trait,
  Specialty,
  Wormhole,
  SystemType,
  UniqueTile,
  Anomaly,
  Expansion,
  FactionAttributes,
} from "./const";

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
/**
 * Static definition not sent over wire.
 */

export interface System {
  systemId: number;
  factionId?: number;
  name: string;
  game: Expansion;
  wormholes: Wormhole[];
  systemType: SystemType;
  emptySystem: boolean;
  unique?: UniqueTile;
  anomaly?: Anomaly;
}

export interface Faction {
  factionId: number;
  name: string;
  short: string;
  game: Expansion;
  attributes: FactionAttributes[];
  startingForces: Force;
}

export interface SetupInfo {
  factions: Faction[];
  systems: System[];
  planets: Planet[];
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

export interface Reinforcements extends Force {
  tokens: number;
}
