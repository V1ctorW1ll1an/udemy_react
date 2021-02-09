import './App.scss'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import RandomNumber from './components/basicos/RandomNumber'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticoes/ListaAlunos'
import TabelaProduto from './components/repeticoes/TabelaProduto.jsx'
import ParOuImpar from './components/condicional/ParOuImpar.jsx'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/Forms/Input'
import Contador from './components/contador/Contador'

import React, { Component } from 'react'

const customStyle = (bgColor, textColor = '#363732') => ({
  background: bgColor,
  color: textColor
})

const bg10 = ['linear-gradient(to right, #b92b27, #1565c0)', '#fff']
const bg11 = ['linear-gradient(to right, #ff00cc, #333399)', '#fff']
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
          <Card title="#10 Contador" customStyle={customStyle(...bg11)}>
            <Contador initialNumber={10} />
          </Card>
          <Card title="#10 Componente controlado" customStyle={customStyle(...bg10)}>
            <Input />
          </Card>
          <Card title="#09 Comunicação indireta" customStyle={customStyle('#F7567C')}>
            <IndiretaPai />
          </Card>
          <Card title="#08 Comunicação" customStyle={customStyle('#D4AFB9')}>
            <DiretaPai />
          </Card>
          <Card title="#07 Renderização condicional" customStyle={customStyle('#66C3FF')}>
            <ParOuImpar number={1}></ParOuImpar>
          </Card>
          <Card title="#06 Desafio Repetições" customStyle={customStyle('#363732', '#DCE1E9')}>
            <TabelaProduto></TabelaProduto>
          </Card>
          <Card title="#05 Repetições" customStyle={customStyle('#7E7F9A')}>
            <ListaAlunos></ListaAlunos>
          </Card>
          <Card title="#04 Membros" customStyle={customStyle('#EB9486')}>
            <Familia sobrenome="Silva" >
              <FamiliaMembro nome="Joao" />
              <FamiliaMembro nome="Pedro" />
              <FamiliaMembro nome="Matheus" />
            </Familia>
          </Card>

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

          <Card title="#01 Primeiro" customStyle={customStyle('#97A7B3')}>
            <Primeiro />
          </Card>

        </div>

      </div>
    )
  }
}
