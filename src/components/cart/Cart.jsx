import React from 'react';
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import firebase from "firebase";
import 'firebase/firestore'
import  getFirestore  from '../firebase/getFirestore';
import '../css/Cart.css'


function Cart() {
  const [idOrden, setOrden] = useState('')
  const [formData, setFormData] = useState({name: '', tel: '', email:''})
  const {cartList, vaciarCarrito, precioTotal } = useCartContext()
  const generarOrden = (e)=> {
    e.preventDefault()  
    const orden = {}
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
    orden.buyer = formData
    orden.total =  precioTotal()
    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio 
        return {id, nombre, precio}   
    })

    const db = getFirestore() //ESto agrega uno nuevo 
    db.collection("ordenCliente").add(orden)
    .then(resp => setOrden(resp.id))// Id de usuario
    .finally(()=> setFormData({
      name:'',
      tel:'',
      email:'',
      direccion:''
    }))

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

  const handleChange=(e)=>{
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container-cart">
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
        {/* <button type='button' id='btnVaciar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>  */}
        <form 
          onSubmit={generarOrden} 
          onChange={handleChange} 
          >
          <input type='text' name='name' placeholder='nombre' value={formData.name}/>
          <input type='text' name='tel' placeholder='telefono' value={formData.tel}/>
          <input type='email' name='email' placeholder='email' value={formData.email}/> 
          <input type='direccion' name='direccion' placeholder='direccion' value={formData.direccion}/>    
          <button id='btnEnviarOrden'>Enviar Orden</button>
        </form>
        <button type='button' id='btnVaciar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      </div> 
      <section>
        <div className="container-orden">
        {idOrden!==''&& <label>El id de su orden es : {idOrden}</label>}
        </div>
      </section>
    </div>
    
    
  )
}

export default Cart

