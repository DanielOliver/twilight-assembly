import { PlanetType, Trait, Specialty } from "./types_const";

export function specialtyToText(
  specialty: Specialty | undefined | null
): string {
  switch (specialty) {
    case Specialty.Biotic:
      return "Biotic";
    case Specialty.Cybernetics:
      return "Cybernetics";
    case Specialty.Propulsion:
      return "Propulsion";
    case Specialty.Warfare:
      return "Warfare";
    default:
      return "";
  }
}
export function traitToText(trait: Trait | undefined | null): string {
  switch (trait) {
    case Trait.Cultural:
      return "Cultural";
    case Trait.Hazardous:
      return "Hazardous";
    case Trait.Industrial:
      return "Industrial";
    default:
      return "";
  }
}
export function planetTypeToText(
  planetType: PlanetType | undefined | null
): string {
  switch (planetType) {
    case PlanetType.Home:
      return "Home";
    case PlanetType.Legendary:
      return "Legendary";
    case PlanetType.MecatolRex:
      return "Mecatol Rex";
    case PlanetType.Normal:
      return "Normal";
    default:
      return "";
  }
}
