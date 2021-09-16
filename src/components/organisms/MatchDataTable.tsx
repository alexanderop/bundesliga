import React, { useMemo } from 'react'
import Table, { TeamIconCell, ConvertTimeToHourMinute } from '@src/components/organisms/Table'
import useMatchDataFetch from '@src/helper/api/openligadb/useMatchDataFetch'

const MatchDataTable = () => {
  const column = useMemo(
    () => [
      {
        Header: '',
        Cell: TeamIconCell,
        accessor: 'Team1.TeamIconUrl',
        disableSortBy: true,
      },
      {
        Header: '',
        accessor: 'Team1.TeamName',
      },
      {
        Header: '',
        Cell: ConvertTimeToHourMinute,
        accessor: 'MatchDateTime',
      },
      {
        Header: '',
        accessor: 'Team2.TeamName',
      },
      {
        Header: '',
        Cell: TeamIconCell,
        accessor: 'Team2.TeamIconUrl',
        disableSortBy: true,
      },
    ],
    [],
  )

  const { data, error } = useMatchDataFetch()

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>

  //   const goalGetters = data
  //     .map((goalGetter, index) => ({
  //       ...goalGetter,
  //       Position: index + 1,
  //     }))
  //     .sort((a, b) => b.GoalCount - a.GoalCount)
  //     .slice(0, 18)

  return (
    <div className="p-1">
      <h1 className="mb-3 text-2xl font-bold">Current Match Table</h1>
      <Table columns={column} data={data} />
    </div>
  )
}

export default MatchDataTable
