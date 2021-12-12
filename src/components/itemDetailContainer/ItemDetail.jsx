import React from 'react';
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import '../css/ItemDetail.css'

const ItemDetail = ({producto}) => {

  const [contador, setContador] = useState(1)

  const {cartList, agregarProducto} = useCartContext()


  function onAddCarrito(cant) {
    setContador(cant)
    agregarProducto({...producto, cantidad: cant})
  }
  console.log(cartList)

  return (
    <>
      <label>DETALLE DE COMPRA</label>
      <div className="card-detail">
      <center> 
        <div className="container-detail">
          <label>{producto.nombre}</label>
        </div>
        <div className="container-detail-img">
          <img src={producto.imagenURL} alt="fotoss"/>
        </div>
        <div className="container-detail-precio">
          <label>{producto.precio}</label>
        </div>
      </center>
      </div>
      <ItemCount initial={1} stock={5} onAddCarrito={onAddCarrito} />
    </>
  )
}

export default ItemDetail

