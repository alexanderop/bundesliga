import React, { useMemo } from 'react'
import Table from '@src/components/organisms/Table'
import useGoalGettersFetch from '@src/helper/api/openligadb/useGoalGettersFetch'

const GoalGettersTable = () => {
  const column = useMemo(
    () => [
      {
        Header: 'Player',
        accessor: 'GoalGetterName',
      },
      {
        Header: 'Goals',
        accessor: 'GoalCount',
      },
    ],
    [],
  )

  const { data, error } = useGoalGettersFetch()

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>

  const goalGetters = data
    .map((goalGetter, index) => ({
      ...goalGetter,
      Position: index + 1,
    }))
    .sort((a, b) => b.GoalCount - a.GoalCount)
    .slice(0, 18)

  return (
    <div className="p-1">
      <h1 className="mb-3 text-2xl font-bold">Goal Getters Table</h1>
      <Table columns={column} data={goalGetters} />
    </div>
  )
}

export default GoalGettersTable
