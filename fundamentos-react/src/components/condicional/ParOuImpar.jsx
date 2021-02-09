import React, { Component } from 'react'

export default class ParOuImpar extends Component {
  render () {
    return (
      <div>
        {
          this.props.number % 2 === 0
            ? <span>Par</span>
            : <span>Impar</span>
        }
      </div>
    )
  }
}
