import React from 'react'
import { NextPage } from 'next'
import AppLayout from '@src/components/templates/AppLayout'
import Table, { TeamIconCell } from '@src/components/atoms/Table'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime'

const Home: NextPage = ({ teams }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'Position',
      },
      {
        Header: '',
        Cell: TeamIconCell,
        accessor: 'TeamIconUrl',
        imgAccessor: 'TeamIconUrl',
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
      },
      {
        Header: 'Diff',
        accessor: 'GoalDiff',
      },
    ],
    [],
  )

  return (
    <AppLayout>
      <Table columns={columns} data={teams} />
    </AppLayout>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://www.openligadb.de/api/getbltable/bl1/2021', {
    headers: { Accept: 'application/json' },
  })
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const teams = data.map((team, index) => ({
    ...team,
    Position: index + 1,
    GoalsDiff: `${team.Goals}:${team.OpponentGoals}`,
  }))

  return {
    props: { teams },
  }
}

export default Home
