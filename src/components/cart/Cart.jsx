import React from 'react';
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import firebase from "firebase";
import 'firebase/firestore'
import { getFirestore } from '../firebase/getFirestore';




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
    db.collection('ordenCliente').add(orden)
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

    <div>
      <h3>SOY CARRITO</h3>
      <section>
        {idOrden!==''&& <label>El id de su orden es : {idOrden}</label>}
      </section>
      {cartList.map(prod =>  <li key={prod.id}> {prod.nombre} { prod.cantidad}
        <img src={prod.imagenURL} />
      {prod.stock}</li>)}
      
      {`Precio Total: ${precioTotal()}`}
      <br />
      <button type='button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button> 
      <form 
          onSubmit={generarOrden} 
          // onChange={handleChange} 
        >
          {/* <input type='text' name='name' placeholder='name' value={formData.name}/>
          <input type='text' name='phone'placeholder='tel' value={formData.phone}/>
          <input type='email' name='email'placeholder='email' value={formData.email}/>  */}
          <button>Enviar Orden</button>
      </form>

    </div>
  )
}

export default Cart

