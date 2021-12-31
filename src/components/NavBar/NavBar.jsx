import React from 'react'
import Menu from '../svg/bars-solid.svg'
import Cerrar from '../svg/times-solid.svg'
import CarritoIcono from '../svg/shopping-cart-solid.svg'
import {useState} from 'react'
import { Link} from 'react-router-dom'
import { useCartContext} from '../context/CartContext'
import '../css/NavBar.css'
// import handleClick from '../context/CartContext'

const NavBar = () =>  {
    const [abrirMenu, setAbrirMenu] = useState(false);
    const ToggleMode = () => {
      setAbrirMenu(!abrirMenu);
    }

    // const hamburgerIcon = <div className="menu" onClick={() => setAbrirMenu(!abrirMenu)}/>

    // const closeIcon = <div className="cerrar" onClick={() => setAbrirMenu(!abrirMenu)}/>


    const { cantidadItem } = useCartContext()
    
    return (
  <header>
    <div className= {abrirMenu ? "menu" : "menu"} onClick={ToggleMode}>
      <img src={Menu} alt="" width="20"/>
    </div>
      <div className="logo">
        <h1><Link to="/">cervezafs</Link></h1>
      </div>
      <nav> 
        <ul className= {abrirMenu ? "toggle" : ""}>
          <li><Link to="/">Inicio </Link></li>
          <li><Link to="/ipa">Ipa</Link></li>
          <li><Link to="/rubia">Rubia</Link></li>
          <li><Link to="/roja">Roja</Link></li>
          <li><Link to="/negra">Negra</Link></li>
          <li className={abrirMenu ? "cerrar" : "cerrar"} onClick={ToggleMode}  >
              <img src={Cerrar} alt="" width="20"/>
          </li>
        </ul>
        <div className="nav-carrito">
            <span className="cart-length"> { cantidadItem() !== 0 && cantidadItem() }
            </span>
            <Link to="/cart">
          
              <img src= {CarritoIcono} alt="" width="20"/>
            </Link>
        </div>
      </nav>
  </header>
  )
}

export default NavBar
