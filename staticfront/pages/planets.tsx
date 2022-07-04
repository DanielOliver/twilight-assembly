import type {NextPage} from 'next'
// import {Layout} from "../components/Layout";
import React from "react";
import {Column, useSortBy, useTable} from "react-table";
import {Container} from "react-bootstrap";
// import {Planet} from "ti4-types";
import { PlanetData as ssadfasdfasdfadsf } from "../../TwilightAssembly.Front/src/Data.fs.js";
import { PlanetData } from "ti4-core/data";
import { Planet } from "ti4-core/types";

// const gameData = getGameDataDictionary();
// const planets = Object.values(gameData.planets);
// const systems = gameData.system_tiles

const isInBaseGame = (system_id: number) => {
    return false;
    // return systems[system_id].base_game
}

const Planets: NextPage = () => {
    console.log(ssadfasdfasdfadsf)

    const data = React.useMemo(() => PlanetData, []);
    const columns = React.useMemo<Column<Planet>[]>(
        () => [
            {
                Header: 'Id',
                Footer: 'Id',
                accessor: 'PlanetId',
            },
            {
                Header: 'Planet Name',
                Footer: 'Planet Name',
                accessor: 'Name'
            },
            {
                Header: 'System',
                Footer: 'System',
                accessor: 'SystemId'
            },
            {
                Header: 'Resources',
                Footer: 'Resources',
                accessor: 'Resources'
            },
            {
                Header: 'Influence',
                Footer: 'Influence',
                accessor: 'Influence'
            }
            // {
            //     Header: 'Trait',
            //     Footer: 'Trait',
            //     accessor: 'Trait'
            // },
            // {
            //     Header: 'Specialty',
            //     Footer: 'Specialty',
            //     accessor: 'Specialty'
            // }
            // {
            //     Header: 'Home Planet',
            //     Footer: 'Home Planet',
            //     accessor: row => row.is_home_planet ? 'Home Planet' : '',
            // },
            // {
            //     Header: 'Legendary',
            //     Footer: 'Legendary',
            //     accessor: row => row.is_legendary ? 'Legendary' : '',
            // },
            // {
            //     Header: 'Game',
            //     Footer: 'Game',
            //     accessor: row => isInBaseGame(row.system_id) ? 'Base' : 'POK',
            // }
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
            <Container fluid="lg">
                <table className="table w-auto table-responsive table-bordered table-hover"  {...getTableProps()}>
                    <caption>List of planets in Twilight Imperium 4</caption>
                    <thead>
                    {headerGroups.map((headerGroup, i) => (
                        // @ts-ignore
                        <tr key={i} className="table-light" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, j) => (
                                // @ts-ignore
                                <th key={j} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                    {footerGroups.map((footerGroup,i) => (
                        // @ts-ignore
                        <tr key={i} className="table-light" {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column, j) => (
                                // @ts-ignore
                                <th key={j} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Footer')}
                                    {// @ts-ignore
                                        <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                    </tfoot>
                    <tbody className="table-group-divider" {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            // @ts-ignore
                            <tr key={i} {...row.getRowProps()}>
                                {row.cells.map((cell, j) => {
                                    return (
                                        // @ts-ignore
                                        <td key={j} {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Container>
    )
}

export default Planets
