/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
// src/Table.js
import React, { useState } from 'react'
import { SortDownIcon, SortIcon, SortUpIcon } from '@src/components/atoms/Icons'
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy } from 'react-table'
import classNames from 'classnames'
import Image from 'next/image'

type TableProps = {
  columns: Array<any>
  data: Array<any>
}

/* eslint-disable react/jsx-props-no-spreading */

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: {
  preGlobalFilteredRows: any[]
  globalFilter: any
  setGlobalFilter: (filterValue: any) => void
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((filterValue) => {
    setGlobalFilter(filterValue || undefined)
  }, 200)

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
      />
    </label>
  )
}

export function InternationalPlaceCell({ value }: { value: number }) {
  let renderInternationalPlace: 'renderNothing' | 'championsLeague' | 'ueafaLeague' | 'relegation' | 'descent' =
    'renderNothing'
  const championsLeaguePlaces = [1, 2, 3, 4]
  const ueafeLeaguePlaces = [5, 6]
  const abstieg = [17, 18]

  if (championsLeaguePlaces.includes(value)) {
    renderInternationalPlace = 'championsLeague'
  }

  if (ueafeLeaguePlaces.includes(value)) {
    renderInternationalPlace = 'ueafaLeague'
  }

  if (value === 16) {
    renderInternationalPlace = 'relegation'
  }

  if (abstieg.includes(value)) {
    renderInternationalPlace = 'descent'
  }

  return (
    <div className="flex">
      <span
        className={classNames(
          'w-2 mr-1',
          renderInternationalPlace.startsWith('renderNothing') ? '' : null,
          renderInternationalPlace.startsWith('ueafa') ? 'bg-blue-600' : null,
          renderInternationalPlace.startsWith('championsLeague') ? ' bg-green-500' : null,
          renderInternationalPlace.startsWith('descent') ? 'bg-red-600' : null,
          renderInternationalPlace.startsWith('relegation') ? 'bg-yellow-600' : null,
        )}
      />
      <span>{value}</span>
    </div>
  )
}

export function TeamIconCell({ value }: { value: string }) {
  return (
    <div className="flex overflow-hidden -space-x-1">
      <Image
        width={50}
        height={50}
        className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
        src={value}
        alt=""
      />
    </div>
  )
}

export function MakeCellBold({ value }: { value: string }) {
  return <div className="font-bold">{value}</div>
}

function Table({ columns, data }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
  )

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="flex flex-col mt-2">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full table-auto divide-y divide-gray-200" {...getTableProps()}>
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase group"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                                )
                              ) : column.disableSortBy ? (
                                <div />
                              ) : (
                                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr className="hover:bg-gray-200" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td className="px-6 py-4 whitespace-nowrap" {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
