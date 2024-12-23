import { useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/App.css'

import {Tablero} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>        
      </div>
      
      <div>
        <Tablero></Tablero>
      </div>
    </>
  )
}

export default App