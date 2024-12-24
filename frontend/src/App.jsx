import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/App.css'

import {Tablero} from './components'

function App({size=[4,4]}) {

  const dimension=size[0]*size[1]
  // const [gameOver,setGameOver]=useState(false)
  const [puntuacion, setPuntuacion] = useState(0)
  const [data,setData]=useState(Array(dimension).fill(""))
  // const [data,setData]=useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  
 

  const actualizarData=(index,value)=>{
    setData(prevData=>(
      prevData.map((dataVal,i)=>(i===index?value:dataVal))
    ))
  }

  useEffect(() => {
    

    const clean=()=>{
      // console.log("finalizado")
    }
    
    return clean()
  }, [data])
  
  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>        
      </div>
      
      <div>
        Contador
      </div>


      <div>
        <Tablero size={size} data={data} actualizarData={actualizarData}></Tablero>
      </div>
    </>
  )
}

export default App