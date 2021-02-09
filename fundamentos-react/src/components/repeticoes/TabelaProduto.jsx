import React, { Component } from 'react'
import './TabelaProdutos.scss'
import produtos from '../../data/produtos'

export default class TabelaProduto extends Component {
  render () {
    return (
      <div className="TabelaProdutos">
        <table>
          <thead>
            <tr >
              <th >Id</th>
              <th >Nome</th>
              <th >Preço</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos.map((produto, i) => {
                return (<tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                  <td >{produto.id}</td>
                  <td >{produto.nome}</td>
                  <td >R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
