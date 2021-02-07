import React from 'react'

const RandomNumber = (props) => {
  const { min, max } = props

  const number = Math.floor(Math.random() * max) + min

  return (
    <div>
      <h4>random number: {number}</h4>
    </div>
  )
}

export default RandomNumber
