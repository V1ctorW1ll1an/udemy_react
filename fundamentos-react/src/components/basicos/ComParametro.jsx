import React from 'react'

export default function ComParametro (props) {
  const situation = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
      <h1> {props.title} </h1>
      <p>
        O Aluno(a)
        <strong> {props.name} </strong>
         obteve a nota:
         <strong> {props.nota} </strong>
          e está
          <strong> {situation} </strong>
      </p>
    </div>
  )
}
