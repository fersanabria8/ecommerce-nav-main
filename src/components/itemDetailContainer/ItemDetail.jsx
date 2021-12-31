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
      <div className="card-detail">
        <div className="container-detail">
          <h3>{producto.nombre}</h3>
        </div>
        <div className="container-detail-img">
          <img src={producto.imagenURL} alt="fotoss"/>
        </div>
        <div className="container-detail-precio">
          <p>$ {producto.precio}</p>
        </div>
      </div>
      <ItemCount initial={1} onAddCarrito={onAddCarrito} />
    </>
  )
}

export default ItemDetail

