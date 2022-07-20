import type { NextPage } from 'next'
import React from "react";
import { Column, useSortBy, useTable } from "react-table";
import { Container } from "react-bootstrap";
import { PlanetData } from "ti4-core/data";
import { Planet } from "ti4-core/types";
import { planetTypeToText, specialtyToText, traitToText } from 'ti4-core/display';
import Layout from '../components/layout';

const Planets: NextPage = () => {
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
                Header: 'System Id',
                Footer: 'System Id',
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
            },
            {
                Header: 'Specialty',
                Footer: 'Specialty',
                accessor: row => specialtyToText(row.Specialty),                
            },
            {
                Header: 'Trait',
                Footer: 'Trait',
                accessor: row => traitToText(row.Trait),                
            },
            {
                Header: 'Type',
                Footer: 'Type',
                accessor: row => planetTypeToText(row.PlanetType),                
            },
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
        <>
            <Layout></Layout>
            <Container fluid="lg">
                <h1 className='display-1'>Planets</h1>
                <table className="table w-auto table-striped table-responsive table-bordered table-hover"  {...getTableProps()}>
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
                        {footerGroups.map((footerGroup, i) => (
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
        </>
    )
}

export default Planets
