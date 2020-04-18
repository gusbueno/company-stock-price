import store from '../store'
import {
  DashboardActionTypes,
  DashboardState,
  FETCH_COMPANY_DATA_SUCCESS
} from './Dashboard.types'

const defaultState: DashboardState = store.dashboard

const dashboard = (state = defaultState, action: DashboardActionTypes): DashboardState => {
  switch (action.type) {
    case FETCH_COMPANY_DATA_SUCCESS:
      const { company } = action
      return {
        ...state,
        company
      }
    default:
      return state
  }
}

export default dashboard
