import { useState } from 'react'

import '../styles/casilla.css'

function Casilla({children}) {
  const [count, setCount] = useState(0)

  return (
    <div className='casilla'>
      {children}
    </div>
  )
}

export default Casilla