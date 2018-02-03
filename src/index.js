import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import * as api from './api'
import {app as appReducer} from './reducers'
import {loadLocations} from './actions'
import './index.css'
import App from './components/App'

const store = createStore(
  appReducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

store.dispatch(loadLocations())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
