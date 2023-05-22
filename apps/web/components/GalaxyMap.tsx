import { createSixPlayerGalaxy } from "@twilight-assembly/core";
import { PublicGalaxyMap } from "ui";

export default function GalaxyMap() {
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

  return (
    <div style={{ width: 100 }}>
      <PublicGalaxyMap publicGalaxy={publicGalaxy} />
    </div>
  );
}
