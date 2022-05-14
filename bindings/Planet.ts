import type { PlanetTrait } from "./PlanetTrait";
import type { TechnologySpecialty } from "./TechnologySpecialty";

export interface Planet { system_id: number, planet_id: number, name: string, flavor_text: string, resources: number, influence: number, is_legendary: boolean, is_home_planet: boolean, is_mecatol_rex: boolean, planet_trait: PlanetTrait | null, specialty: TechnologySpecialty | null, }