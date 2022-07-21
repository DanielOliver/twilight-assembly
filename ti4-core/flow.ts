import { GameCreationState } from "./types";

/// use seedrandom in future for RNG
/// npm install seedrandom
export class GameCreation {
    private _name: string = "";
    private _description: string = "";
    private _playerCount: number = 6;
    private _participants: string[] = []
    private _mapTtsString: string = ""
    private _state: GameCreationState = GameCreationState.NameTheGame;

    constructor() { }

    get name(): string { return this._name }
    get description(): string { return this._description }
    get playerCount(): number { return this._playerCount }
    get state(): GameCreationState { return this._state }
    get participants(): string[] { return this._participants }
    get mapTtsString(): string { return this._mapTtsString }

    setName(name: string, description: string) {
        this._name = name
        this._description = description
        this._state = GameCreationState.TellParticipants
    }
    setPlayerCount(playerCount: number) {
        this._playerCount = playerCount
    }
    setParticipants(participants: string[]) {
        this._participants = participants
    }
    setMapTtsString(mapTtsString: string) {
        this._mapTtsString = mapTtsString
    }
}
