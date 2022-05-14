import type {NextPage} from 'next'
import {getGameDataDictionary} from "../utils/twilight_assembly";
import {Layout} from "../components/Layout";
import React from "react";
import {Column, useSortBy, useTable} from "react-table";
import {SystemTile} from "../bindings/SystemTile";
import { Container } from 'react-bootstrap';

const gameData = getGameDataDictionary();
const systems = Object.values(gameData.system_tiles);

const Systems: NextPage = () => {

    const data = React.useMemo(() => systems, []);
    const columns = React.useMemo<Column<SystemTile>[]>(
        () => [
            {
                Header: 'Id',
                Footer: 'Id',
                accessor: 'system_id',
            },
            {
                Header: 'Type',
                Footer: 'Type',
                accessor: 'system_type'
            },
            {
                Header: 'Game',
                Footer: 'Game',
                accessor: row => row.base_game ? 'Base' : 'POK',
            },
            {
                Header: 'Anomaly',
                Footer: 'Anomaly',
                accessor: 'anomaly'
            },
            {
                Header: 'Wormhole',
                Footer: 'Wormhole',
                accessor: 'wormhole'
            },
            {
                Header: 'Home System',
                Footer: 'Home System',
                accessor: row => row.system_type === "Green" ? 'Home System' : '',
            },
            {
                Header: 'Name',
                Footer: 'Name',
                accessor: 'name'
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
    } = useTable<SystemTile>({
            data,
            columns
        },
        useSortBy);

    return (
        <Layout>
            <Container fluid="lg">
                <table className="table w-auto table-responsive table-bordered table-hover"  {...getTableProps()}>
                    <caption>List of systems in Twilight Imperium 4</caption>
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

export default Systems
