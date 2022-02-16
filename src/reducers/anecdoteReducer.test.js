import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('anecdote reducer', () => {
  const initialState = [{
    content: "test content 1",
    votes: 0,
    id: "0"
  },
  {
    content: "test content 2",
    votes: 0,
    id: "1"
  }]

  test('vote is incremented', () => {
    const action = {
      type: 'VOTE_INCREMENT',
      id: "0"
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    const target = newState.find(e => e.id === action.id)
    expect(target.votes).toEqual(initialState.find(e => e.id === action.id).votes + 1)
  })
})