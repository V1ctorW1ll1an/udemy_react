import React, { Component } from 'react'
import DiretaFilho from './DiretaFilho'

export default class DiretaPai extends Component {
  render () {
    return (
      <div>
        <DiretaFilho name="Joao" age={38} nerd={true} />
      </div>
    )
  }
}
