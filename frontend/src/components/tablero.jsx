import { useState } from 'react'

import '../styles/tablero.css'
import {Casilla} from './index'

function Tablero({size,data}) {
  const [count, setCount] = useState(0)

  return (
    <div id="tablero" style={{
      gridTemplateColumns: `repeat(${size[0]}, 1fr)`,
      gridTemplateRows: `repeat(${size[1]}, 1fr)`,
    }}>
      {
        data.map((elemento,index)=>{
          return (
            <Casilla data={elemento} key={index}></Casilla>
          )          
        })
      }
    </div>
  )
}

export default Tablero