import useFetch from '@src/helper/api/useFetch'

interface Group {
  GroupName: string
  GroupOrderID: number
  GroupID: number
}

interface Team {
  TeamId: number
  TeamName: string
  ShortName: string
  TeamIconUrl: string
  TeamGroupName: null | string
}

interface MatchResult {
  ResultID: number
  ResultName: 'Endergebnis' | 'Halbzeitergebnis'
  PointsTeam1: number
  PointsTeam2: number
  ResultOrderID: number
  ResultTypeID: number
  ResultDescription: string
}

interface Location {
  LocationID: number
  LocationCity: string
  LocationStadium: string
}

interface Goal {
  GoalID: number
  ScoreTeam1: number
  ScoreTeam2: number
  MatchMinute: number
  GoalGetterID: number
  GoalGetterName: string
  IsPenalty: boolean
  IsOwnGoal: boolean
  IsOvertime: boolean
  Comment: null | string
}

interface MatchData {
  MatchID: number
  MatchDateTime: string
  TimeZoneID: string
  LeagueId: number
  LeagueName: string
  MatchDateTimeUTC: string
  Group: Group
  Team1: Team
  Team2: Team
  LastUpdateDateTime: string
  MatchIsFinished: boolean
  MatchResults: MatchResult[]
  Goals: Goal[]
  Location: null | Location
  NumberOfViewers: null | number
}

function useMatchDataFetch(league = 'bl1', year = null, matchDay = null) {
  const baseUrl = `https://www.openligadb.de/api/getmatchdata/${league}`
  const url = matchDay ? `${baseUrl}/${matchDay}` : baseUrl
  const { data, error } = useFetch<MatchData[]>(url)
  return { data, error }
}

export default useMatchDataFetch
