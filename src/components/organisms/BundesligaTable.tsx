import React, { useMemo } from 'react'
import Table, { TeamIconCell, MakeCellBold, InternationalPlaceCell } from '@src/components/organisms/Table'
import useBlTableFetch from '@src/helper/api/openligadb/useBlTableFetch'

const BundesligaTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: '',
        Cell: InternationalPlaceCell,
        accessor: 'Position',
      },
      {
        Header: '',
        Cell: TeamIconCell,
        accessor: 'TeamIconUrl',
        disableSortBy: true,
      },
      {
        Header: 'Name',
        accessor: 'TeamName',
      },
      {
        Header: 'Matches',
        accessor: 'Matches',
      },
      {
        Header: 'Points',
        accessor: 'Points',
        Cell: MakeCellBold,
      },
      {
        Header: 'W',
        accessor: 'Won',
      },
      {
        Header: 'D',
        accessor: 'Draw',
      },
      {
        Header: 'L',
        accessor: 'Lost',
      },
      {
        Header: 'Goals',
        accessor: 'GoalsDiff',
        disableSortBy: true,
        Cell: MakeCellBold,
      },
      {
        Header: 'Diff',
        accessor: 'GoalDiff',
      },
    ],
    [],
  )

  const { data, error } = useBlTableFetch()

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>

  const blTable = data.map((team, index) => ({
    ...team,
    Position: index + 1,
    GoalsDiff: `${team.Goals}:${team.OpponentGoals}`,
  }))

  return (
    <div className="p-1">
      <h1 className="mb-3 text-2xl font-bold">Bundesliga Table</h1>
      <Table columns={columns} data={blTable} />
    </div>
  )
}

export default BundesligaTable
