import store from '../store'
import {
  DashboardActionTypes,
  DashboardState,
  FETCH_COMPANY_DATA_SUCCESS,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  FETCH_COMPANY_DATA_START,
  FETCH_COMPANY_DATA_FAIL
} from './Dashboard.types'

const defaultState: DashboardState = store.dashboard

const dashboard = (state = defaultState, action: DashboardActionTypes): DashboardState => {
  switch (action.type) {
    case FETCH_COMPANY_DATA_START: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_COMPANY_DATA_SUCCESS: {
      // @ts-ignore
      const { company } = action
      return {
        ...state,
        company,
        isFetching: false
      }
    }
    case FETCH_COMPANY_DATA_FAIL: {
      return {
        ...state,
        isFetching: false
      }
    }
    case ADD_FAVOURITE: {
      // @ts-ignore
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
            symbol: company.symbol,
            companyName: company.companyName
          }
        }
      }
    }
    case REMOVE_FAVOURITE: {
      // @ts-ignore
      const { company } = action
      const { [company.symbol]: _, ...newFavourites } = state.favourites
      return {
        ...state,
        company: {
          ...company,
          isFavourite: false
        },
        favourites: {
          ...newFavourites
        }
      }
    }
    default:
      return state
  }
}

export default dashboard
