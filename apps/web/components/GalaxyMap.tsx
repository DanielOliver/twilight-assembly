import { createSixPlayerGalaxy } from "@twilight-assembly/core";
import { PublicGalaxyMap } from "ui";

export default function GalaxyMap() {
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

  return (
    <div>
      <PublicGalaxyMap publicGalaxy={publicGalaxy} />
    </div>
  );
}
