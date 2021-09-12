import React from 'react'
import { NextPage } from 'next'
import AppLayout from '@src/components/templates/AppLayout'
import GoalGettersTable from '@src/components/organisms/GoalGettersTable'
import BundesligaTable from '@src/components/organisms/BundesligaTable'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime'

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div className="flex">
        <BundesligaTable />
        <GoalGettersTable />
      </div>
    </AppLayout>
  )
}

export default Home
