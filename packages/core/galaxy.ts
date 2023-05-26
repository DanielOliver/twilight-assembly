import { DefaultSetupInfo } from "./data";
import { SystemType, UniqueTile } from "./types/const";
import {
  GalaxyCreationSimpleParameters,
  GalaxyCreationSimpleSixPlayerParameters,
} from "./types/engine";
import {
  PlanetI,
  PlayerI,
  Position,
  PublicGalaxy,
  Reinforcements,
  SecretGalaxy,
  SystemI,
  UnitTechnologyI,
} from "./types/galaxy";
import { SetupInfo } from "./types/static";

const defaultReinforcements: Reinforcements = {
  tokens: 8,
  carriers: 4,
  cruisers: 8,
  destroyers: 8,
  dreadnoughts: 5,
  fighters: 10,
  flagship: 1,
  warsuns: 2,
  infantry: 12,
  mechs: 4,
  factory: 3,
  pds: 6,
};

const defaultUnitTechnology: UnitTechnologyI = {
  carriers: 0,
  cruisers: 0,
  destroyers: 0,
  dreadnoughts: 0,
  factory: 0,
  fighters: 0,
  flagship: 0,
  infantry: 0,
  mechs: 0,
  pds: 0,
  warsuns: 0,
};

const defaultPlayerSettings = {
  maxSecretObjectives: 3,
  points: 0,
  scoredPublicObjectiveIds: [],
  scoredSecretObjectiveIds: [],
  strategyCardId: null,

  fleetCapacity: 3,

  exhaustedTechnologyIds: [],
  exhaustedLeaderIds: [],
  faceUpPromissoryNoteIds: [],
  faceUpRelicIds: [],
  handActionCardCount: 0,
};

export function ttsStringtoTilePositions(ttsString: string): {
  systemId: number;
  position: Position;
}[] {
  // const mapWidth = 9;
  // const mapHeight = 9;
  const offset = -2;

  const tileIds = ttsString.split(" ").map((x) => Number(x));
  const tilePositions = [
    //Ring 1
    [4, 3],
    [5, 4],
    [5, 5],
    [4, 5],
    [3, 5],
    [3, 4],
    //Ring 2
    [4, 2],
    [5, 3],
    [6, 3],
    [6, 4],
    [6, 5],
    [5, 6],

    [4, 6],
    [3, 6],
    [2, 5],
    [2, 4],
    [2, 3],
    [3, 3],
    //Ring 3
    [4, 1],
    [5, 2],
    [6, 2],
    [7, 3],
    [7, 4],
    [7, 5],

    [7, 6],
    [6, 6],
    [5, 7],
    [4, 7],
    [3, 7],
    [2, 6],

    [1, 6],
    [1, 5],
    [1, 4],
    [1, 3],
    [2, 2],
    [3, 2],
  ];

  return tilePositions
    .map((e, i) => {
      return {
        position: {
          x: e[0],
          y: e[1],
        },
        systemId: tileIds[i],
      };
    })
    .concat({
      // Mecatol Rex
      position: {
        x: 4,
        y: 4,
      },
      systemId: 18,
    });
}

/// Assume a standard 6p galaxy
export function createSixPlayerGalaxy(
  creation: GalaxyCreationSimpleSixPlayerParameters
): {
  publicGalaxy: PublicGalaxy;
  secretGalaxy: SecretGalaxy;
} {
  const playerPositions = [
    [1, 6],
    [1, 5],
    [1, 4],
    [1, 3],
    [2, 2],
    [3, 2],
  ];

  const players = creation.players.map((x, index) => {
    const playerPosition = playerPositions[index];
    return {
      factionId: x.factionId,
      playerId: x.playerId,
      speakerOrder: index,
      position: {
        x: playerPosition[0],
        y: playerPosition[1],
      },
    };
  });
  let map = ttsStringtoTilePositions(creation.ttsString);
  if (players.some((x) => x.factionId === 7)) {
    map = map.concat({
      position: { x: 1, y: 1 },
      systemId: 51,
    });
  }

  map = map.concat({
    position: { x: 7, y: 1 },
    systemId: 82,
  });

  return createGalaxy({
    players: players,
    map: map,
  });
}

export function createGalaxy(creation: GalaxyCreationSimpleParameters): {
  publicGalaxy: PublicGalaxy;
  secretGalaxy: SecretGalaxy;
} {
  const setupInfo: SetupInfo = DefaultSetupInfo;

  const secretGalaxy: SecretGalaxy = {
    actionCardDeckIds: [],
    agendaDeckIds: [],
    explorationDeckIds: [],
    playerSecrets: [],
    publicObjectiveDeckIds: [],
    randomState: {},
    relicDeckIds: [],
    secretObjectiveDeckIds: [],
  };

  let players: PlayerI[] = creation.players.map((x) => {
    return {
      ...defaultPlayerSettings,

      playerId: x.playerId,
      factionId: x.factionId,
      homeSystemId: 0,
      planetIds: [],

      reinforcements: defaultReinforcements,
      unitTechnology: defaultUnitTechnology,

      currentCommodity: 0,
      maxCommodity: 2,

      unlockedLeaderIds: [],
      leaderIds: [],
      technologyIds: [],
      handPromissoryNoteCount: 0,
      handSecretObjectiveCount: 0,

      strategyCardIds: [],
      exhaustedStrategyCardIds: [],

      fleetTokens: [
        {
          playerId: x.playerId,
          count: 3,
        },
      ],
      strategyTokens: [
        {
          playerId: x.playerId,
          count: 3,
        },
      ],
      tacticalTokens: [
        {
          playerId: x.playerId,
          count: 2,
        },
      ],
    };
  });

  let speakerOrder = creation.players
    .sort((a, b) => a.speakerOrder - b.speakerOrder)
    .map((x) => x.playerId);

  let planets: { [planetId: number]: PlanetI } = {};
  let systems: { [systemId: number]: SystemI } = {};

  creation.map.forEach((mapitem) => {
    const system = setupInfo.systems.find(
      (system) => system.systemId === mapitem.systemId
    );
    if (!system) return [];
    const systemPlanets = setupInfo.planets.filter(
      (planet) => planet.systemId === mapitem.systemId
    );

    systemPlanets.forEach((planet) => {
      planets[planet.planetId] = {
        planetId: planet.planetId,
        attachments: [],
        canOccupy: true,
        exhausted: false,
        influence: planet.influence,
        resources: planet.resources,
        planetType: planet.planetType,
        PlayerId: null,
        spaceCannon: [],
        specialties: planet.specialty ? [planet.specialty] : [],
        systemId: planet.systemId,
        traits: planet.trait ? [planet.trait] : [],
      };
    });

    systems[mapitem.systemId] = {
      systemId: mapitem.systemId,
      position: mapitem.position,
      adjacencies: [],
      neighbors: [],
      canOccupy: true,
      wormholes: system.wormholes,
      homeSystem: !system.emptySystem && system.systemType === SystemType.Green,
      legendary:
        system.unique === UniqueTile.MalliceFlippedSide ||
        system.unique === UniqueTile.MalliceStartingSide ||
        system.unique === UniqueTile.HopesEnd ||
        system.unique === UniqueTile.Mirage ||
        system.unique === UniqueTile.Primor,
      mecatolRex: system.unique === UniqueTile.MecatolRex,
      emptySystem: system.emptySystem,
      anomalies: system.anomaly ? [system.anomaly] : [],
      planetIds: systemPlanets.map((y) => y.planetId),
      tokens: [],
      frontierToken: system.emptySystem,
    };
  });

  let publicGalaxy: PublicGalaxy = {
    activeLawIds: [],
    forces: {},
    initiativeOrder: [],
    planets: planets,
    players: Object.fromEntries(players.map((x) => [x.playerId, x])),
    speakerOrder: speakerOrder,
    strategyCards: {},
    systems: systems,
  };

  return {
    publicGalaxy,
    secretGalaxy,
  };
}
