import React, { Component } from 'react'
import alunos from '../../data/alunos'

export default class ListaAlunos extends Component {
  render () {
    return (
      <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
        <ul>
          {alunos.map((aluno, i) => {
            return <li key={i} style={{ listStyle: 'none' }}>
              <span>
                {aluno.id}) {aluno.nome} - nota: {aluno.nota}
              </span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
