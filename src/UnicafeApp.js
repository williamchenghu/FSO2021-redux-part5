import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const unicafeState = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>UniCafe</h1>
      <button onClick={() => dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={() => dispatch({ type: 'OK' })}>ok</button>
      <button onClick={() => dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>reset stats</button>
      <div>good {unicafeState.good}</div>
      <div>ok {unicafeState.ok}</div>
      <div>bad {unicafeState.bad}</div>
    </div >
  )
}

export default App