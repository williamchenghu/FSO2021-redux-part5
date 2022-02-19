import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteIncrement } from '../redux/reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../redux/reducers/notificaitonReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesSortByVotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotesSortByVotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
              dispatch(voteIncrement(anecdote.id))
              dispatch(setNotification(anecdote.content))
              setTimeout(() => dispatch(removeNotification()), 5000);
            }}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList