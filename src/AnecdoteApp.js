import { useSelector, useDispatch } from 'react-redux'
import { anecdoteAdd, voteIncrement } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.addAnecdote.value
    event.target.addAnecdote.value = ''
    dispatch(anecdoteAdd(content))
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteIncrement(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input type='text' name='addAnecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App