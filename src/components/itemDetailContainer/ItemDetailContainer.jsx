import {useState, useEffect} from 'react'
import React from 'react';
import { useParams } from 'react-router'
// import { getFetchUno, getFetch} from '../data/data'
import '../css/ItemDetailContainer.css'
import { getFirestore } from '../firebase/getFirestore';
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [prod, setProd] = useState({})
  const {id} = useParams()


  useEffect(() =>{
    const db = getFirestore()
    db.collection('productos').doc(id).get()
    .then(res => {
      setProd({id: res.id, ...res.data()})
    })
    .catch(err => console.log(err))
    .finally(()=> setCargando(false))

  },[])

  return (
    <>
        <div className="detailcontainer-caja">
      {cargando ?
        <h2>Cargando desde ItemDetailContainer..</h2> :
          <ItemDetail  producto={prod} />
        }
        </div>
    </>
  )
}

export default ItemDetailContainer


























// import React, { useState, useEffect} from 'react'
// import productos from '../data/data'
// // import Item from '../itemList/Item'
// import ItemList from '../itemList/ItemList'
// import { useParams } from 'react-router-dom'



// const ItemDetailContainer = ( ) => {

//   const [prod, setProducto] = useState({})
//   const [cargando, setCargando] = useState(true)

//   const {id} = useParams()

//   useEffect(()=>{
//     const getFetch=new Promise((aceptado, rechazada)=>{
//       setTimeout(()=>{
//         aceptado(productos)
//       },2000)
//     })
//     getFetch.then((productos)=>{
//         setProducto(productos.find((item)=>item.id===id))
//         setCargando(false)
//     })
// },[id])




//   return (
//     <div className='detail-container'>
//     {cargando ? <h2>CARGANDO PROD..</h2> : 
//         <ItemList id={prod.id} nombre={prod.nombre} precio={prod.precio} stock={prod.stock} image={prod.image} />
//     }
    
//     </div>
//   )
// }

// export default ItemDetailContainer

