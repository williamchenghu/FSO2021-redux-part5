import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificaitonReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notificatons: notificationReducer
  }
})

export default store