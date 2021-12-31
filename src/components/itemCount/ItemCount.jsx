import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import '../css/ItemCount.css'


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
        <button type='button' id="resta" onClick={resta}>-</button>
        <label>{contador}</label>
        <button type='button' id='suma' onClick={suma}>+</button>
        </center>
            { condicionBoton && 
            <>
  
              <Link to='/'>
                <button type='button' id='btnSeguirComprando'>Seguir Comprando</button>
              </Link>
              <Link to='/cart'>
                <button type='button' id='btnfinCompra'>Finalizar Compra</button>
              </Link>
            </>
            } 
            { !condicionBoton && <button id='botonAddItemCount' onClick={handleClick}>Agregar al Carrito</button>}
      </section>
    </div>
  )
}

export default ItemCount
