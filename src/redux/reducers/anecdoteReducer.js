import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../../services/anecdotes'

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    voteIncrement(state, action) {
      const targetToIncrementVote = state.find(e => e.id === action.payload)
      const voteIncreased = { ...targetToIncrementVote, votes: targetToIncrementVote.votes + 1 }
      return state.map(e => e.id !== action.payload ? e : voteIncreased)
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

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(anecdoteAdd(newAnecdote))
  }
}

export default anecdoteSlice.reducer
