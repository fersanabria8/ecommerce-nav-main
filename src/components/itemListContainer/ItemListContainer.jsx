import React, { useState, useEffect } from 'react'
import { getFirestore } from '../firebase/getFirestore'
// import { Link } from 'react-router-dom'
// import {getFetch} from '../data/data'
import '../css/ItemListContainer.css'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer () {

  const [productocv, setProductocv] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoria } = useParams()


useEffect(()=>{
  
  const dbQuery = getFirestore() 
  
  if (categoria) {
      dbQuery.collection('productos').where('categoria', '==', categoria).get() // traer todo
        .then(data => setProductocv( data.docs.map(prod => ( { id: prod.id, ...prod.data() } ))   ))
        .catch(err=> console.log(err))
        .finally(()=> setCargando(false))    

      } else {                
        dbQuery.collection('productos').get() // traer todo
        .then(data => setProductocv( data.docs.map(prod => ({id: prod.id, ...prod.data()}))   ))
        .catch(err=> console.log(err))
        .finally(()=> setCargando(false))
      }
},[])

console.log(productocv)

  return (

    <>
    {categoria && <h2 className="categoria">Categoria: {categoria}</h2>}
      {cargando ? <h1>Cargado ItemListContainer</h1> :
      <ItemList productocv={productocv}/>
      }
    </>
  )
}

export default ItemListContainer
