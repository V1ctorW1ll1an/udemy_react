import React, { Component } from 'react'

export default class FamiliaMembro extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.nome} {this.props.sobrenome}</h3>
      </div>
    )
  }
}
