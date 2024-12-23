import { useState } from 'react'

import '../styles/casilla.css'

function Casilla({data}) {
  const [count, setCount] = useState(0)

  return (
    <div className='casilla'>
      <label>{data}</label>
    </div>
  )
}

export default Casilla