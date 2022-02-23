import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    voteIncrement(state, action) {
      return state.map(e => e.id !== action.payload.id ? e : action.payload)
    },
    anecdoteAdd(state, action) {
      return state.concat(action.payload)
    }
  }
})

export const { setAnecdotes, voteIncrement, anecdoteAdd } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const updateAnecdoteVote = anecdote => {
  const updatedContent = { ...anecdote, votes: anecdote.votes + 1 }
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, updatedContent)
    dispatch(voteIncrement(updatedAnecdote))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(anecdoteAdd(newAnecdote))
  }
}

export default anecdoteSlice.reducer
