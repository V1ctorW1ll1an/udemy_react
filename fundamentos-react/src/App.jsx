import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import RandomNumber from './components/basicos/RandomNumber'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import './App.scss'

import React, { Component } from 'react'

const customStyle = (color) => ({
  backgroundColor: color
})

export default class App extends Component {
  render () {
    return (
      <div id="app">

        <header className="app__header">
          <h1 className="app__title">
            Fundamentos React
          </h1>
        </header>

        <div className="cards__container">
          <Card title="#03 Desafio aleatorio" customStyle={customStyle('#CAE7B9')}>
            <RandomNumber min={1} max={50} />
            <RandomNumber min={1} max={50} />
            <RandomNumber min={1} max={50} />
            <RandomNumber min={1} max={50} />
            <RandomNumber min={1} max={50} />
            <RandomNumber min={1} max={50} />
          </Card>

          <Card title="#02 Parametros" customStyle={customStyle('#F3DE8A')}>
            <ComParametro
              title="Joao"
              subtitle="Subtitle"
              nota={4} />
          </Card>

          <Card title="#01 Primeiro" customStyle={customStyle('#EB9486')}>
            <Primeiro />
          </Card>

          <Card title="#01 Primeiro" customStyle={customStyle('#EB9486')}>
            <Familia sobrenome="Ferreira" />
          </Card>
        </div>

      </div>
    )
  }
}
