import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import unicafeReducer from './redux/reducers/unicafeReducer'
import UnicafeApp from './UnicafeApp'
import anecdoteStore from './redux/store'
import AnecdoteApp from './AnecdoteApp'

const unicafeStore = createStore(unicafeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <>
    <Provider store={unicafeStore}>
      <UnicafeApp />
    </Provider>
    <Provider store={anecdoteStore}>
      <AnecdoteApp />
    </Provider>
  </>,
  document.getElementById('root')
)
