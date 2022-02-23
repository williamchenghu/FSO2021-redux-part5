import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdoteVote } from '../redux/reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../redux/reducers/notificaitonReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesSortByVotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotesSortByVotes
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.content.toLowerCase()))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                dispatch(updateAnecdoteVote(anecdote))
                dispatch(setNotification(anecdote.content))
                setTimeout(() => dispatch(removeNotification()), 5000);
              }}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList