import { useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/App.css'

import {Tablero} from './components'

function App() {
  const [count, setCount] = useState(0)
  const size=[6,5]
  const data=[
    "",
    "",
    "4",
    "2",
    "32",
    "",
    "",
    "4",
    "2",
    "",
    "",
    "4",
    "2",
    "",
    "",
    "4",
    "2",
    "",
    "",
    "4",
    "2",
    "",
    "2",
    ""
  ]

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>        
      </div>
      
      <div>
        <Tablero size={size} data={data}></Tablero>
      </div>
    </>
  )
}

export default App