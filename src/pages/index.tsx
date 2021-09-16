import React from 'react'
import { NextPage } from 'next'
import AppLayout from '@src/components/templates/AppLayout'
import GoalGettersTable from '@src/components/organisms/GoalGettersTable'
import BundesligaTable from '@src/components/organisms/BundesligaTable'
import MatchDataTable from '@src/components/organisms/MatchDataTable'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime'

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div>
        <MatchDataTable />
        <BundesligaTable />
        <GoalGettersTable />
      </div>
    </AppLayout>
  )
}

export default Home
