import { combineReducers } from 'redux'

import dashboard from './Dashboard/Dashboard.reducer'

const rootReducer = () => combineReducers({
  dashboard
})

export default rootReducer
