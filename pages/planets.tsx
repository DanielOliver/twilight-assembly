import type {NextPage} from 'next'
import {getGameDataDictionary} from "../utils/twilight_assembly";
import {Layout} from "../components/Layout";
import React from "react";
import {Column, useSortBy, useTable} from "react-table";
import {Planet} from "../bindings/Planet";
import {Container} from "react-bootstrap";

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
        </Layout>
    )
}

export default Planets
