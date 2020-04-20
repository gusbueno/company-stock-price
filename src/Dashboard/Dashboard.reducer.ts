import store from '../store'
import {
  DashboardActionTypes,
  DashboardState,
  FETCH_COMPANY_DATA_SUCCESS,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  LOAD_FAVOURITE
} from './Dashboard.types'

const defaultState: DashboardState = store.dashboard

const dashboard = (state = defaultState, action: DashboardActionTypes): DashboardState => {
  switch (action.type) {
    case LOAD_FAVOURITE:
    case FETCH_COMPANY_DATA_SUCCESS: {
      const { company } = action
      return {
        ...state,
        company
      }
    }
    case ADD_FAVOURITE: {
      const { company } = action
      return {
        ...state,
        company: {
          ...company,
          isFavourite: true
        },
        favourites: {
          ...state.favourites,
          [company.symbol]: {
            ...company,
            isFavourite: true
          }
        }
      }
    }
    case REMOVE_FAVOURITE: {
      const { company } = action
      const { [company.symbol]: _, ...newFavourites } = state.favourites
      return {
        ...state,
        company: {
          ...company,
          isFavourite: false
        },
        favourites: newFavourites
      }
    }
    default:
      return state
  }
}

export default dashboard
