import React from 'react'

const Display = props => {
  return (
    <div>
      <h3>{props.number} x 2 = {props.number * 2}</h3>
    </div>
  )
}

export default Display
