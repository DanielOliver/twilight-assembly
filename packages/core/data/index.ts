import { SetupInfo } from "../types/static";
import FactionData from "./factions";
import PlanetData from "./planets";
import SystemData from "./systems";

const DefaultSetupInfo: SetupInfo = {
  factions: FactionData,
  planets: PlanetData,
  systems: SystemData,
};

export { FactionData, PlanetData, SystemData, DefaultSetupInfo };
