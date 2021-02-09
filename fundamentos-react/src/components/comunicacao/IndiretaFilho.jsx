import React, { Component } from 'react'

export default class IndiretaFilho extends Component {
  render () {
    const [max, min] = [0, 100]
    const idade = _ => parseInt(Math.random() * (max - min) + min)
    const nerd = _ => Math.random() > 0.5
    return (
      < div >
        <div>Filho</div>
        <button onClick={
          (_) => {
            this.props.click('João', idade, nerd)
          }
        }>
          Fornecer informações
            </button>
      </ div>
    )
  }
}
