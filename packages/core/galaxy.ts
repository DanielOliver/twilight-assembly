import {
  GalaxyCreationSimpleParameters,
  Phase,
  PlayerI,
  PublicGalaxy,
  PublicGalaxyField,
  Reinforcements,
  SecretGalaxy,
  StrategyPhaseTimingWindow,
  UnitTechnologyI,
} from "./types_engine";

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
  fleetTokens: 3,
  strategyTokens: 2,
  tacticalTokens: 3,

  exhaustedTechnologyIds: [],
  exhaustedLeaderIds: [],
  faceUpPromissoryNoteIds: [],
  faceUpRelicIds: [],
  handActionCardCount: 0,
};

export function createGalaxy(creation: GalaxyCreationSimpleParameters): {
  public: PublicGalaxy;
  secret: SecretGalaxy;
} {
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
    };
  });

  let speakerOrder = creation.players
    .sort((a, b) => a.speakerOrder - b.speakerOrder)
    .map((x) => x.playerId);

  let publicGalaxy: PublicGalaxy = {
    activeLawIds: [],
    forces: {},
    initiativeOrder: [],
    planets: {},
    players: Object.fromEntries(players.map((x) => [x.playerId, x])),
    speakerOrder: speakerOrder,
    strategyCards: {},
    status: {
      galaxyVersion: 1,
      phase: Phase.Strategy,
      round: 1,
      remainingPlayerIds: [],
      remainingStrategyCardIds: [],
      timing: { window: StrategyPhaseTimingWindow.Init },
    },
    systems: {},
  };

  return {
    public: publicGalaxy,
    secret: secretGalaxy,
  };
}
