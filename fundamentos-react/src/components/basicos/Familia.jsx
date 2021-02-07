import React, { Component } from 'react'
import FamiliaMembro from './FamiliaMembro'
export default class Familia extends Component {
  render () {
    return (
      <div>
        <FamiliaMembro nome="João" sobrenome={this.props.sobrenome} />
        <FamiliaMembro nome="Maria" {...this.props} />
        <FamiliaMembro nome="Ana" sobrenome="Silva" />
      </div>
    )
  }
}
