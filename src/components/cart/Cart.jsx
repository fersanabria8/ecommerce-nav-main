import React from 'react';
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import firebase from "firebase";
import 'firebase/firestore'
import  getFirestore  from '../firebase/getFirestore';
import '../css/Cart.css'


function Cart() {
  const [idOrden, setOrden] = useState('')
  const {cartList, vaciarCarrito, precioTotal } = useCartContext()
  const generarOrden = (e)=> {
    e.preventDefault()  
    const orden = {}
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
    orden.buyer = {nombre: 'Fer', email:'f@gmail.com', tel: '12345678'}
    orden.total =  precioTotal()
    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.id
        const precio = cartItem.id
        return {id, nombre, precio}   
    })

    const db = getFirestore() //ESto agrega uno nuevo 
    db.collection("ordenClientee").add(orden)
    .then(resp => setOrden(resp.id))

    const itemsToUpdate = db.collection('productos').where(
        firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)//[id1, id2....]
    )
    const batch = db.batch();

    itemsToUpdate.get()

    .then( collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
            })
        })
        batch.commit().then(res =>{
            console.log('Tarea terminada')
        })
    })
}
  return (
    <div className="container-cart">
      <section>
        <div className="container-orden">
        {idOrden!==''&& <label>El id de su orden es : {idOrden}</label>}
        </div>
      </section>
      {cartList.map(prod =>
      <div className='container-cart-nombre' key={prod.id}> 
        <p>{prod.nombre} x{prod.cantidad}</p>
        <div className="container-cart-img">
          <img src={prod.imagenURL}alt="fotos"/>
        </div>
      </div>)}
        <br />
      <div className='container-cart-botones'>
        <span> 
          {`Precio Total: $ ${precioTotal()}`}
        </span>
        <br />
        <button type='button' id='btnVaciar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button> 
        <form onSubmit={generarOrden} 
          // onChange={handleChange} 
          >
          <input type='text' name='name' placeholder='name' />
          <input type='text' name='phone'placeholder='tel' />
          <input type='email' name='email'placeholder='email'/> 
          <input type='email' name='email'placeholder='validarEmail'/>   
          <button type='button' id='btnEnviarOrden'>Enviar Orden</button>
        </form>
      </div> 

    </div>
    
  )
}

export default Cart

