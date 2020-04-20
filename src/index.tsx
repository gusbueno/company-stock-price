import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Dashboard from './Dashboard'

const store = createStore(
  rootReducer(), /* preloadedState, */
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
)
