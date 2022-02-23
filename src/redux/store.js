import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificaitonReducer'
import anecdoteFilterReducer from './reducers/anecdoteFilterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
    filter: anecdoteFilterReducer
  }
})

export default store