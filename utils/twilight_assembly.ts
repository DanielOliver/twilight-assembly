import {get_game_data, get_game_data_dictionary} from 'twilight-assembly'
import {Planet} from "../bindings/Planet";
import {SystemTile} from "../bindings/SystemTile";
import {Faction} from "../bindings/Faction";

// export interface InitialGameData {
//     planets: Planet[];
//     system_tiles: SystemTile[];
// }

export interface InitialGameDataDictionary {
    planets: { [key: string]: Planet };
    system_tiles: { [key: string]: SystemTile };
    factions:  { [key: string]: Faction };
}

// export function getGameData(): InitialGameData {
//     return get_game_data();
// }

let game_data_dictionary = get_game_data_dictionary()

export function getGameDataDictionary(): InitialGameDataDictionary {
    return game_data_dictionary;
}


