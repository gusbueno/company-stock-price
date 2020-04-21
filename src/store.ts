import { DashboardState } from './Dashboard/Dashboard.types'

export interface IStore {
  dashboard: DashboardState
}

export default {
  dashboard: {
    company: null,
    favourites: {},
    isFetching: false
  }
}
