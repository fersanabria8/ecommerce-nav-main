import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/getFirestore';
import ItemDetail from './ItemDetail'
import '../css/ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [prod, setProd] = useState({})
  const {id} = useParams()


  useEffect(() =>{
    const db = getFirestore()
    const dbQuery = db.collection('productos').doc(id)
    dbQuery.get()
    .then(resp => {
    console.log('fer llama a la api firebase')
    setProd({id: resp.id, ...resp.data()})
    })
    .catch(err => console.log(err))
    .finally(()=> setCargando(false))
  },[])
console.log(prod)
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