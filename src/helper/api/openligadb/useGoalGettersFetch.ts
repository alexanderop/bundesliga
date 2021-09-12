import useFetch from '@src/helper/api/useFetch'

interface GoalGetter {
  GoalGetterId: number
  GoalGetterName: string
  GoalCount: number
}

function useGoalGettersFetch(league = 'bl1', year = new Date().getFullYear()) {
  const url = `https://www.openligadb.de/api/getgoalgetters/${league}/${year}`
  const { data, error } = useFetch<GoalGetter[]>(url)
  return { data, error }
}

export default useGoalGettersFetch
