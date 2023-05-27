import { Force } from "./types/static";

export function isForceEmpty(force: Force): boolean {
  return (
    force.carriers == 0 &&
    force.cruisers == 0 &&
    force.destroyers == 0 &&
    force.dreadnoughts == 0 &&
    force.factory == 0 &&
    force.fighters == 0 &&
    force.flagship == 0 &&
    force.infantry == 0 &&
    force.mechs == 0 &&
    force.pds == 0 &&
    force.warsuns == 0
  );
}
