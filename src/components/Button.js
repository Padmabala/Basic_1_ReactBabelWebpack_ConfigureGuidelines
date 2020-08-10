import React from 'react';
import PropTypes from 'prop-types';
export const Button=(props)=>{
  const handleClick=()=>{
    props.onClickFunction(props.increment)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>+{props.increment}</button>
    </div>
  );
};

Button.propTypes={
  increment:PropTypes.number.isRequired,
  onClickFunction:PropTypes.func.isRequired
}
