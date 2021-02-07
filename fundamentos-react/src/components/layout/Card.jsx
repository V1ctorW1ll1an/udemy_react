import React from 'react'
import './Card.scss'

const Card = (props) => {
  const { title, children, customStyle } = props
  return (
    <div className="Card" style={customStyle}>
      <div className="Card__title">
        <h2>{title}</h2>
      </div>
      <div className="Card__content">
        {children}
      </div>
    </div>
  )
}

export default Card
