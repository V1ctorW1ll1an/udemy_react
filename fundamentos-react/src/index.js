import './index.scss'
import ReactDOM from "react-dom"
import React from "react";
import Primeiro from './components/basicos/Primeiro'

const el = document.getElementById('root')


ReactDOM.render(
  <div>
    <h2>
      <strong>
        <Primeiro />
      </strong>
    </h2>
  </div>,
  el)