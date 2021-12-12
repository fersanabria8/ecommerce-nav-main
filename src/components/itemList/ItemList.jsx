// import {memo} from 'react'
import React from 'react';
import Item from "../itemList/Item"
import '../css/Item.css'

function ItemList ({productocv}){
  return (
    
    <div id="producto-container">
      { productocv.map(prod => <Item prod={prod}  /> ) }
    </div>
    
  )
}



export default ItemList