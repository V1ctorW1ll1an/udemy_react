import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = props => {
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)
  // nome idade nerd
  function fornecerInformações (nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho click={fornecerInformações} />
      <p> {nome}</p>
      <p> {idade}</p>
      <p> {nerd ? 'Verdadeiro' : 'False'}</p>
    </div>
  )
}

export default IndiretaPai
