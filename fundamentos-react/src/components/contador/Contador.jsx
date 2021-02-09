import React, { Component } from 'react'
import Buttons from './Buttons'
import Display from './Display'
import './Contador.scss'

export default class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: props.initialNumber,
      step: 0
    }
  }

  increment () {
    this.setState({
      number: (this.state.number + 1)
    })
  }

  decrement () {
    this.setState({
      number: (this.state.number - 1)
    })
  }

  setStep (e) {
    this.setState({
      number: +e.target.value
    })
  }

  render () {
    return (
      <div className="Contador">
        <Display number={this.state.number} setStep={e => this.setStep(e)} />
        <div className="Contador__container">
          <Buttons inc={_ => this.increment()} dec={_ => this.decrement()} />
        </div>
      </div>
    )
  }
}
