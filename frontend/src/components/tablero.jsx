import { useEffect, useState } from 'react'
import '../styles/tablero.css'
import {Casilla} from './index'

function Tablero({size,data,actualizarData}) {

  const validarPosibleMovimiento=()=>{
    const dimension=size[0]*size[1]

    const validacionPosicionI=(value)=>{
      for(let i=1;i<=size[1];i++){
        if(value===i*size[0]-1){          
          return false
        }
      }
      return true
    }

    const validacionPosicionD=(value)=>{
      for(let i=1;i<size[1];i++){
        if(value===i*size[0]){          
          return false
        }
      }
      return true
    }

    for(let index=0;index<dimension;index++){
      const value=data[index]
      const posArriba=index-size[0]
      const posAbajo=index+size[0]
      const posIzquierda=index-1
      const posDerecha=index+1

      if(posArriba>=0){
        if(value===data[posArriba]) return true
      }

      if(posAbajo<dimension){
        if(value===data[posAbajo]) return true
      }

      if(validacionPosicionI(posIzquierda)){
        if(value===data[posIzquierda]) return true
      }

      if(validacionPosicionD(posDerecha)){
        if(value===data[posDerecha]){
          return true
        } 
      }
    }
  
    return false
  }

  const validarEstadoJuego=()=>{
    if(!data.includes("")){
      if(!validarPosibleMovimiento()){
        console.log("game over")
      }
    }
  }

  const keyDirection=(e)=>{
    if(validarTecla(e.key)){
      realizarMovimiento(e.key)
    }
  }

  const validarTecla=(key)=>{
    return key==='ArrowUp' || key==='ArrowDown' || key==='ArrowRight' || key==='ArrowLeft' 
  }

  const realizarMovimiento=(key)=>{
    
    actualizarData(4,8)


    
    console.log(data)

  }

  useEffect(() => {
    
    validarEstadoJuego()

    const clean=()=>{
      // console.log("finalizado")
    }
    
    return clean()
  }, [data])

  return (
    <div id="tablero" 
    onKeyUp={keyDirection}
    tabIndex="0" 
    style={{
      gridTemplateColumns: `repeat(${size[0]}, 1fr)`,
      gridTemplateRows: `repeat(${size[1]}, 1fr)`,
    }}>
      {
        data.map((value,index)=>{
          return (
            // <Casilla data={elemento} key={index}></Casilla>
            <Casilla key={index}>{value}</Casilla>
          )          
        })
      }
    </div>
  )
}

export default Tablero