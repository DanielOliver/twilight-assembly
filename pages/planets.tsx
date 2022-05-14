import type {NextPage} from 'next'
import {getGameDataDictionary} from "../utils/twilight_assembly";

let gameData = getGameDataDictionary();

const Planets: NextPage = () => {
    let planets = gameData.planets;
    let systems = gameData.system_tiles

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Planet Name</th>
                        <th>Resources</th>
                        <th>Influence</th>
                        <th>Trait</th>
                        <th>Specialty</th>
                        <th>Home System</th>
                        <th>Legendary</th>
                    </tr>
                </thead>
                <tbody>
                {}
                {Object.values(planets).map((x, index) =>
                    <tr key={index}>
                        <td>{x.planet_id}</td>
                        <td>{x.name}</td>
                        <td>{x.resources}</td>
                        <td>{x.influence}</td>
                        <td>{x.planet_trait}</td>
                        <td>{x.specialty}</td>
                        <td>{x.is_home_planet ? "Home Planet": ""}</td>
                        <td>{x.is_legendary ? "Legendary": ""}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default Planets
