import { describe, expect, it } from "vitest";
import { createSixPlayerGalaxy } from "../galaxy";

describe("galaxy.test.creation", () => {
  it("predefined galaxy preset 6p", () => {
    const ttsString =
      "45 20 38 50 61 23 64 60 22 68 24 21 37 66 70 26 27 65 8 34 39 55 35 33 16 79 40 54 36 48 17 28 42 12 62 19";

    const { publicGalaxy, secretGalaxy } = createSixPlayerGalaxy({
      players: [
        {
          factionId: 11,
          playerId: 1,
        },
        {
          factionId: 23,
          playerId: 2,
        },
        {
          factionId: 5,
          playerId: 3,
        },
        {
          factionId: 24,
          playerId: 4,
        },
        {
          factionId: 7, // ghost boiz
          playerId: 5,
        },
        {
          factionId: 13,
          playerId: 6,
        },
      ],
      ttsString: ttsString,
    });

    // Checking home systems
    expect(publicGalaxy.systems[8].position).toEqual({ x: 4, y: 1 });
    expect(publicGalaxy.systems[55].position).toEqual({ x: 7, y: 3 });
    expect(publicGalaxy.systems[16].position).toEqual({ x: 7, y: 6 });
    expect(publicGalaxy.systems[54].position).toEqual({ x: 4, y: 7 });
    expect(publicGalaxy.systems[51].position).toEqual({ x: 1, y: 1 });
    expect(publicGalaxy.systems[17].position).toEqual({ x: 1, y: 6 });
    expect(publicGalaxy.systems[12].position).toEqual({ x: 1, y: 3 });
  });
});
