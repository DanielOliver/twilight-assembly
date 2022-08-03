import { PublicGalaxy, RequestGalaxy, SecretGalaxy } from "./types";

export class GravitasDrive {
  constructor(private galaxy: PublicGalaxy, private secret: SecretGalaxy) {}

  request(request: RequestGalaxy) {
    console.log("Request.type", request.type);
  }
}
