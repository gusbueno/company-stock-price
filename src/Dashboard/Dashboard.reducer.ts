import store from '../store'
import { DashboardActionTypes, DashboardState } from './Dashboard.types'

const defaultState: DashboardState = store.dashboard

const dashboard = (state = defaultState, action: DashboardActionTypes): DashboardState => {
  switch (action.type) {
    default:
      return state
  }
}

export default dashboard
