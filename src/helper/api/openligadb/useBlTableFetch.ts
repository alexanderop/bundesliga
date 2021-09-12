import useFetch from '@src/helper/api/useFetch'

interface Team {
  TeamInfoId: number
  TeamName: string
  ShortName: string
  TeamIconUrl: string
  Points: number
  OpponentGoals: number
  Goals: number
  Matches: number
  Won: number
  Lost: number
  Draw: number
  GoalDiff: number
}

function useBlTableFetch(league = 'bl1', year = new Date().getFullYear()) {
  const url = `https://www.openligadb.de/api/getbltable/${league}/${year}`
  const { data, error } = useFetch<Team[]>(url)
  return { data, error }
}

export default useBlTableFetch
