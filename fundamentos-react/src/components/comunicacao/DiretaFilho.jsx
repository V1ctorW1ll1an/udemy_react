import React, { Component } from 'react'

export default class DiretaFilho extends Component {
  render () {
    return (
      <div>
        <p>nome: {this.props.name}</p>
        <p>age: {this.props.age}</p>
        <p>nerd: {this.props.nerd ? 'True' : 'False'}</p>
      </div>
    )
  }
}
