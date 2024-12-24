import { useEffect, useState } from 'react'
import '../styles/tablero.css'
import {Casilla} from './index'

function Tablero({size,data,actualizarData}) {

  const dimension=size[0]*size[1]
  const valorInicial=""
  const randomValues=[2,4]
  const probabilidadValues=[70,30]

  const validarPosibleMovimiento=()=>{

    const validacionPosicion=(value,comparar)=>{
      for(let i=1;i<=size[1];i++){
        if(value===i*comparar){          
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

      if(validacionPosicion(posIzquierda,size[0]-1)){
        if(value===data[posIzquierda]) return true
      }

      if(validacionPosicion(posDerecha,size[0])){
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

  const elegirNumero=()=> {
    const sumaTotal = probabilidadValues.reduce((acc, prob) => acc + prob, 0);

    const numeroAleatorio = Math.random() * sumaTotal;

    let umbralAcumulado = 0;
    for (let i = 0; i < probabilidadValues.length; i++) {
        umbralAcumulado += probabilidadValues[i];
        if (numeroAleatorio < umbralAcumulado) {
            return randomValues[i]
        }
    }
  }

  const insertarNumero=()=>{
    const posicionesVacias= data.reduce((acc, value, index) => {
      if (value === valorInicial) {
        acc.push(index)
      }
      return acc
    }, [])
    
    const randomNumber=elegirNumero()
    const randomPosicion=posicionesVacias[Math.floor(Math.random()*posicionesVacias.length)]
    actualizarData(randomPosicion,randomNumber)
  }

  const realizarMovimiento=(key)=>{
    

    //TODO realizar el movimiento de acuerdo a la key
    //--------------
    
    insertarNumero()
    
  }

  useEffect(() => {
    
    validarEstadoJuego()

    // const clean=()=>{
      // console.log("finalizado")
    // }
    
    // return clean()
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