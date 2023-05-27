import { KeyDiff, Difference } from "./diff";
import { Phase } from "./const";
import { ForceI, PlanetI, PlayerI, StrategyCardI, SystemI } from "./galaxy";
import { Position } from "./static";

export enum GameCreationState {
  NameTheGame = 1,
  TellDraftType,
  TellParticipants,
  TellMap,
  TellFactions,
  TellSeatingOrder,
  TellStrategyCardPickOrder,
  TellOptionalFactionChoices,
  PickSecretObjectives,
  RevealPublicObjectives,
}

export enum GameCreationDraftType {
  TtsString = 1,
  TtsStringRandomPlacement,
}

export interface GalaxyCreationSimpleParameters {
  players: {
    factionId: number;
    playerId: number;
    position: Position;
    speakerOrder: number;
  }[];
  map: {
    systemId: number;
    position: Position;
  }[];
}

export interface GalaxyCreationSimpleSixPlayerParameters {
  players: {
    factionId: number;
    playerId: number;
  }[];
  ttsString: string;
}

export enum ForceStatus {
  Defending = 1,
  Invading,
}

export enum ForceLocation {
  Space = 1,
  Ground,
}

export enum PublicGalaxyField {
  Planet = 1,
  System,
  Player,
  Force,
  ActiveLaw,
  SpeakerOrder,
  InitiativeOrder,
  Status,
  StrategyCard,
}

export type PublicGalaxyDiff =
  | KeyDiff<PlanetI, PublicGalaxyField.Planet>
  | KeyDiff<SystemI, PublicGalaxyField.System>
  | KeyDiff<PlayerI, PublicGalaxyField.Player>
  | KeyDiff<ForceI, PublicGalaxyField.Force>
  | ({ c: PublicGalaxyField.ActiveLaw } & Difference<number[]>)
  | ({ c: PublicGalaxyField.SpeakerOrder } & Difference<number[]>)
  | ({ c: PublicGalaxyField.InitiativeOrder } & Difference<number[]>)
  // | ({ c: PublicGalaxyField.Status } & Difference<GalaxyStatus>)
  | ({ c: PublicGalaxyField.StrategyCard } & Difference<StrategyCardI>);

export interface PublicGalaxyChanges {
  diffs: PublicGalaxyDiff[];
  event: PublicGalaxyEvent;
  galaxyVersion: number;
}

export enum StrategyPhaseTimingWindow {
  Init = 1,
  WhenPlayerChooses,
  StartOfPhase,
  WaitingOnPlayerChoice,
}

export interface StrategyPhaseTimingStartOfPhase {
  window: StrategyPhaseTimingWindow.StartOfPhase;
  remainingPlayerIds: number[];
}

export interface StrategyPhaseTimingWhenPlayerChooses {
  window: StrategyPhaseTimingWindow.WhenPlayerChooses;
  strategyCardId: number;
  playerId: number;
  remainingPlayerIds: number[];
}

export interface StrategyPhaseTimingInit {
  window: StrategyPhaseTimingWindow.Init;
}

export interface StrategyPhaseTimingWaitingOnPlayerChoice {
  window: StrategyPhaseTimingWindow.WaitingOnPlayerChoice;
  playerId: number;
}

export type StrategyPhaseTiming =
  | StrategyPhaseTimingWhenPlayerChooses
  | StrategyPhaseTimingStartOfPhase
  | StrategyPhaseTimingInit
  | StrategyPhaseTimingWaitingOnPlayerChoice;

export interface StrategyPhaseStatus {
  phase: Phase.Strategy;
  round: number;
  timing: StrategyPhaseTiming;
  remainingStrategyCardIds: number[];
  remainingPlayerIds: number[];
  galaxyVersion: number;
}

export interface ActionPhaseStatus {
  phase: Phase.Action;
  round: number;
  waitingOnPlayerId: number;
  galaxyVersion: number;
}

export interface StatusPhaseStatus {
  phase: Phase.Status;
  round: number;
  waitingOnPlayerId: number;
  galaxyVersion: number;
}

export interface AgendaPhaseStatus {
  phase: Phase.Agenda;
  round: number;
  waitingOnPlayerId: number;
  galaxyVersion: number;
}

// export type GalaxyStatus =
//   | StrategyPhaseStatus
//   | ActionPhaseStatus
//   | StatusPhaseStatus
//   | AgendaPhaseStatus;

export enum Requests {
  ActivateSystem = "ActivateSystem",
}

export interface RequestActivateSystem {
  type: Requests.ActivateSystem;
  systemId: number;
  playerId: number;
}

export type RequestGalaxy = RequestActivateSystem;

export interface ActivateSystemEvent {
  eventType: Requests.ActivateSystem;
  playerId: number;
  systemId: number;
  before: {
    containsToken: boolean;
  };
  now: {
    containsToken: boolean;
  };
}

export interface StrategyCardPrimaryEvent {
  eventType: "strategyCardPrimary";
  playerId: number;
  strategyCardId: number;
}

export type PublicGalaxyEvent = ActivateSystemEvent | StrategyCardPrimaryEvent;
