import type { Anomaly } from "./Anomaly";
import type { SystemType } from "./SystemType";
import type { Wormhole } from "./Wormhole";

export interface SystemTile { system_id: number, faction_id: number | null, name: string, base_game: boolean, pok_game: boolean, wormhole: Wormhole | null, anomaly: Anomaly | null, system_type: SystemType, contains_legendary_planet: boolean, is_mecatol_rex: boolean, }