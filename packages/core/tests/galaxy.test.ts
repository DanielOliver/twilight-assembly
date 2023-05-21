import { describe, expect, it } from "vitest";
import { createSixPlayerGalaxy } from "../galaxy";

describe("galaxy.test.creation", () => {
  it("predefined galaxy preset 6p", () => {
    const ttsString =
      "45 20 38 50 61 23 64 60 22 68 24 21 37 66 70 26 27 65 8 34 39 55 35 33 16 79 40 54 36 48 17 28 42 12 62 19";

    const { publicGalaxy, secretGalaxy } = createSixPlayerGalaxy({
      players: [
        {
          factionId: 8,
          playerId: 1,
        },
        {
          factionId: 55,
          playerId: 2,
        },
        {
          factionId: 16,
          playerId: 3,
        },
        {
          factionId: 54,
          playerId: 4,
        },
        {
          factionId: 7, // ghost boiz
          playerId: 5,
        },
        {
          factionId: 12,
          playerId: 6,
        },
      ],
      ttsString: ttsString,
    });

    expect(publicGalaxy.systems[51].position).toEqual({ x: 0, y: 0 });
    expect(publicGalaxy.systems[17].position).toEqual({ x: 1, y: 6 });
  });
});
