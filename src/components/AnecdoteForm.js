import React from 'react'
import { useDispatch } from 'react-redux'
import { anecdoteAdd } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.addAnecdote.value
    event.target.addAnecdote.value = ''
    dispatch(anecdoteAdd(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input type='text' name='addAnecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm