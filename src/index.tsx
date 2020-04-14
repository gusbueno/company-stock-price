import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Dashboard from './Dashboard'

const store = createStore(
  rootReducer(),
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
)
