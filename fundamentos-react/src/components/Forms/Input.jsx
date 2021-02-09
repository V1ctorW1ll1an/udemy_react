import React, { useState } from 'react'

const Input = (props) => {
  const [name, setName] = useState('')

  function changeName (e) {
    setName(e.target.value)
    console.log(name)
  }

  return (
    <div>
      <form action="" method="post">
        <input onChange={changeName} value={name} />
        <input value={name} readOnly />
        <input value={undefined} />
      </form>
    </div>
  )
}

export default Input
