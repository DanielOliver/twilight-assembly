import type {NextPage} from 'next'
import {getGameDataDictionary} from "../utils/twilight_assembly";
import {Layout} from "../components/Layout";
import React from "react";
import {Column, useSortBy, useTable} from "react-table";
import {Planet} from "../bindings/Planet";

const gameData = getGameDataDictionary();
const planets = Object.values(gameData.planets);
const systems = gameData.system_tiles

const isInBaseGame = (system_id: number) => {
    return systems[system_id].base_game
}

const Planets: NextPage = () => {

    const data = React.useMemo(() => planets, []);
    const columns = React.useMemo<Column<Planet>[]>(
        () => [
            {
                Header: 'Id',
                Footer: 'Id',
                accessor: 'planet_id',
            },
            {
                Header: 'Planet Name',
                Footer: 'Planet Name',
                accessor: 'name'
            },
            {
                Header: 'System',
                Footer: 'System',
                accessor: 'system_id'
            },
            {
                Header: 'Resources',
                Footer: 'Resources',
                accessor: 'resources'
            },
            {
                Header: 'Influence',
                Footer: 'Influence',
                accessor: 'influence'
            },
            {
                Header: 'Trait',
                Footer: 'Trait',
                accessor: 'planet_trait'
            },
            {
                Header: 'Specialty',
                Footer: 'Specialty',
                accessor: 'specialty'
            },
            {
                Header: 'Home Planet',
                Footer: 'Home Planet',
                accessor: row => row.is_home_planet ? 'Home Planet' : '',
            },
            {
                Header: 'Legendary',
                Footer: 'Legendary',
                accessor: row => row.is_legendary ? 'Legendary' : '',
            },
            {
                Header: 'Game',
                Footer: 'Game',
                accessor: row => isInBaseGame(row.system_id) ? 'Base' : 'POK',
            }
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable<Planet>({
            data,
            columns
        },
        useSortBy);

    return (
        <Layout>
            <div>
                <table className="table w-auto table-responsive table-bordered table-hover"  {...getTableProps()}>
                    <caption>List of planets in Twilight Imperium 4</caption>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr className="table-light" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // @ts-ignore
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {// @ts-ignore
                                        <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tfoot className="table-group-divider">
                    {footerGroups.map(footerGroup => (
                        <tr className="table-light" {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                // @ts-ignore
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Footer')}
                                    {// @ts-ignore
                                        <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                    </tfoot>
                    {/*<thead>*/}
                    {/*<tr className="table-light">*/}
                    {/*    <th>#</th>*/}
                    {/*    <th>Planet Name</th>*/}
                    {/*    <th>System</th>*/}
                    {/*    <th>Resources</th>*/}
                    {/*    <th>Influence</th>*/}
                    {/*    <th>Trait</th>*/}
                    {/*    <th>Specialty</th>*/}
                    {/*    <th>Home System</th>*/}
                    {/*    <th>Legendary</th>*/}
                    {/*    <th>Game</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tfoot className="table-group-divider">*/}
                    {/*<tr className="table-light">*/}
                    {/*    <th>#</th>*/}
                    {/*    <th>Planet Name</th>*/}
                    {/*    <th>System</th>*/}
                    {/*    <th>Resources</th>*/}
                    {/*    <th>Influence</th>*/}
                    {/*    <th>Trait</th>*/}
                    {/*    <th>Specialty</th>*/}
                    {/*    <th>Home System</th>*/}
                    {/*    <th>Legendary</th>*/}
                    {/*    <th>Game</th>*/}
                    {/*</tr>*/}
                    {/*</tfoot>*/}
                    <tbody className="table-group-divider"  {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {/*{Object.values(planets).map((x, index) =>*/}
                    {/*    <tr key={index}>*/}
                    {/*        <td>{x.planet_id}</td>*/}
                    {/*        <td>{x.name}</td>*/}
                    {/*        <td>{x.system_id}</td>*/}
                    {/*        <td align="right">{x.resources}</td>*/}
                    {/*        <td align="right">{x.influence}</td>*/}
                    {/*        <td>{x.planet_trait}</td>*/}
                    {/*        <td>{x.specialty}</td>*/}
                    {/*        <td>{x.is_home_planet ? "Home" : ""}</td>*/}
                    {/*        <td>{x.is_legendary ? "Legendary" : ""}</td>*/}
                    {/*        <td>{isInBaseGame(x.system_id) ? "Base" : "POK"}</td>*/}
                    {/*    </tr>)*/}
                    {/*}*/}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Planets
