import { useState } from 'react'

import '../styles/tablero.css'
import {Casilla} from './index'

function Tablero() {
  const [count, setCount] = useState(0)

  return (
    <div id="tablero">
      <Casilla data="probando"></Casilla>
    </div>
  )
}

export default Tablero