import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/reducers/anecdoteFilterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={(event) => {
        dispatch(setFilter(event.target.value))
      }} />
    </div>
  );
};

export default Filter;