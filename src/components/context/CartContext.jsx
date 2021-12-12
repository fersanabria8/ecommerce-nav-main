import { useState, createContext, useContext } from 'react'
import React from 'react'

const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)


function CartContextProvider({ children }) {

  const [cartList, setCartList] = useState([])

  const agregarProducto =(item)=>{
  const index = cartList.findIndex(i => i.id === item.id)
  
    if (index > -1) {
      const oldQy = cartList[index].cantidad

      cartList.splice(index, 1)
      setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
    } else {
        setCartList([...cartList, {...item, cantidad: item.cantidad}])
    }
  }

  const precioTotal =()=>{
    return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.precio)), 0) 
  }
  const cantidadItem = () =>{
    return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
  }

  const vaciarCarrito=()=>{
    setCartList([])
  }

  return(
    <CartContext.Provider value={{
      cartList, 
        agregarProducto,
        vaciarCarrito,
        precioTotal,
        cantidadItem

    }}>
      { children }
    </CartContext.Provider>
  )
}




// const CartContext = createContext([])

// export const useCartContext = () =>{ return useContext(CartContext)}


// function CartContextProvider({ children }) {

//   const [cartList, setCartList] = useState([])

//   const agregarProducto = (item) => {

//   const index = cartList.findIndex(i => i.id === item.id)

//     if (index > -1) {
//       const oldQy = cartList[index].cantidad

//     cartList.splice(index, 1)
//       setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
//     } else {
//       setCartList([...cartList, {...item, cantidad: item.cantidad}])
//     }
//   }



//   // const agregarProducto = (item) => {
//   //   setCartList( [...cartList, item])
//   // }

//   const vaciarCarrito=()=> {
//     setCartList([])
//   }


//   return (
//       <CartContext.Provider value={{ 
//         cartList,
//         agregarProducto,
//         vaciarCarrito
//       }}>
//         { children }
//       </CartContext.Provider>
//   )
// }

export default CartContextProvider
