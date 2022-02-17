import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('anecdote reducer', () => {
  const initialState = [{
    content: 'test content 1',
    votes: 0,
    id: 0
  },
  {
    content: 'test content 2',
    votes: 0,
    id: 1
  }]

  it('increase the votes by 1', () => {
    const action = {
      type: 'VOTE_INCREMENT',
      payload: 0
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    const target = newState.find(e => e.id === action.payload)
    expect(target.votes).toEqual(initialState.find(e => e.id === action.payload).votes + 1)
  })

  it.only('adds a new anecdote to the list', () => {
    const action = {
      type: 'ANECDOTE_ADD',
      payload: 'test anecdote to be added.'
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    expect(newState).toHaveLength(initialState.length + 1)
    expect(newState).toEqual(expect.arrayContaining([expect.objectContaining({ content: 'test anecdote to be added.' })]))
  })
})