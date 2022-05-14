import type {NextPage} from 'next'
import {getGameDataDictionary} from "../utils/twilight_assembly";

let gameData = getGameDataDictionary();

const Planets: NextPage = () => {
    let planets = gameData.planets;
    let systems = gameData.system_tiles

    let isInBaseGame = (system_id: number) => {
        return systems[system_id].base_game
    }

    return (
        <div>
            <table className="table w-auto table-responsive table-bordered table-hover">
                <caption>List of planets in Twilight Imperium 4</caption>
                <thead>
                <tr className="table-light">
                    <th>#</th>
                    <th>Planet Name</th>
                    <th>System</th>
                    <th>Resources</th>
                    <th>Influence</th>
                    <th>Trait</th>
                    <th>Specialty</th>
                    <th>Home System</th>
                    <th>Legendary</th>
                    <th>Game</th>
                </tr>
                </thead>
                <tfoot className="table-group-divider">
                <tr className="table-light">
                    <th>#</th>
                    <th>Planet Name</th>
                    <th>System</th>
                    <th>Resources</th>
                    <th>Influence</th>
                    <th>Trait</th>
                    <th>Specialty</th>
                    <th>Home System</th>
                    <th>Legendary</th>
                    <th>Game</th>
                </tr>
                </tfoot>
                <tbody className="table-group-divider">
                {Object.values(planets).map((x, index) =>
                    <tr key={index}>
                        <td>{x.planet_id}</td>
                        <td>{x.name}</td>
                        <td>{x.system_id}</td>
                        <td align="right">{x.resources}</td>
                        <td align="right">{x.influence}</td>
                        <td>{x.planet_trait}</td>
                        <td>{x.specialty}</td>
                        <td>{x.is_home_planet ? "Home" : ""}</td>
                        <td>{x.is_legendary ? "Legendary" : ""}</td>
                        <td>{isInBaseGame(x.system_id) ? "Base": "POK"}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default Planets
