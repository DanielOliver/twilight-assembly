import {
  PlanetType,
  Trait,
  Specialty,
  Wormhole,
  SystemType,
  UniqueTile,
  Anomaly,
  Expansion,
} from "./types_const";

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
  systemId: number | string;
  factionId?: number;
  name: string;
  game: Expansion;
  wormholes: Wormhole[];
  systemType: SystemType;
  emptySystem: boolean;
  unique?: UniqueTile;
  anomaly?: Anomaly;
}
