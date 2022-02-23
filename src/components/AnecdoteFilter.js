import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/reducers/anecdoteFilterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={(event) => {
        props.setFilter(event.target.value)
      }} />
    </div>
  );
};

export default connect(null, { setFilter })(Filter);