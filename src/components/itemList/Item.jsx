import React from 'react';
import { Link } from "react-router-dom"
import '../css/Item.css'


function Item ({prod}) {
return (
    
      <div className="item card-header card-body">
        {/* <Link to={`/${prod.categoria}/${prod.id}`}> */}
        <h2 className="item-nombre">{prod.nombre}</h2>
        <img src={prod.imagenURL} alt="" />
        <Link to={`/detalle/${prod.id}`}>
        <button type="button" className="añadir-carrito-btn"><i className="fas fa-shopping-cart"></i>Añadir al carrito
        </button>
        </Link>
        <h2>{prod.precio}</h2>
        <h2>Stock: {prod.stock}</h2>
      {/* </Link> */}
    </div>

  )
}

export default Item


// Este es mi card-producto individual 