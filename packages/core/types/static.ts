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

export interface Position {
  x: number;
  y: number;
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
  pxOffset?: Position;
  pxRadius?: number;
}

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
