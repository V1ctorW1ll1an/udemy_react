import React from 'react'

const Buttons = props => {
  return (
    <div>
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  )
}

export default Buttons
