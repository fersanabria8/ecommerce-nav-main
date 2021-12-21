import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';


function ItemCount ({initial, onAddCarrito})  {
  const [contador, setContador] = useState(1)
  const [condicionBoton, setCondicionBoton] = useState(false)


  function suma () { 
  
    setContador(contador + 1)
  }

  function resta () {
    if (contador > initial) 
      setContador(contador - 1)
  }

function handleClick() {
    onAddCarrito(contador)
    setContador(initial) 
    setCondicionBoton(true)
  }
  

  return (
    <div>
      <section className="contador-container">
        <center>
        <button type='button' onClick={resta}>-</button>
        <label>{contador}</label>
        <button type='button' onClick={suma}>+</button>
        </center>
            { condicionBoton && 
            <>
  
              <Link to='/'>
                <button>Seguir Comprando</button>
              </Link>
              <Link to='/cart'>
                <button>Finalizar Compra</button>
              </Link>
            </>
            } 
            { !condicionBoton && <button type='button' onClick={handleClick}>Agregar al Carrito desde ItemCount</button>}

      </section>
    </div>
  )
}

export default ItemCount
