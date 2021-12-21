// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import React from 'react'
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import CartContextProvider from './components/context/CartContext';




function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <div className="app">
        <NavBar/>  
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/:categoria/" element={<ItemListContainer/>} />
          <Route exact path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<Cart/>} />

        </Routes>
      </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App; 

