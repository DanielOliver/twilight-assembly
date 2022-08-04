import {
  PublicGalaxy,
  PublicGalaxyChanges,
  RequestGalaxy,
  SecretGalaxy,
  SecretPlayerGalaxy,
} from "./types";

export class GravitasDrive {
  constructor(private galaxy: PublicGalaxy, private secret: SecretGalaxy) {}

  public get publicGalaxy(): PublicGalaxy {
    return this.galaxy;
  }
  public get secretGalaxy(): SecretGalaxy {
    return this.secret;
  }
  playerSecretGalaxy(playerId: number): SecretPlayerGalaxy {
    return this.secret.playerSecrets[playerId];
  }

  /** Returns true while processing work is still to be done.  */
  work(): boolean {
    return false;
  }

  /** Gets all changes that have happened since this version. If no history is found that far back, return null.
   * Null might be a good hint to refresh the entire galaxy */
  chancesSince(galaxyVersion: number): PublicGalaxyChanges[] | null {
    return [];
  }

  /** The primary method by which a player requests to perform an action or a response. */
  request(request: RequestGalaxy): boolean {
    console.log("Request.type", request.type);
    return false;
  }
}
