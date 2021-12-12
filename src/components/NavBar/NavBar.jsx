import Menu from '../svg/bars-solid.svg'
import Cerrar from '../svg/times-solid.svg'
import CarritoIcono from '../svg/shopping-cart-solid.svg'
import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export class NavBar extends Component  {

  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    const {toggle} = this.state;
return (
  <header>
    <div className="menu" onClick={this.menuToggle}>
      <img src={Menu} alt="" width="20"/>
    </div>
      <div className="logo">
        <h1><Link to="/">cervezafs</Link></h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li><Link to="/">Inicio </Link></li>
          <li><Link to="/ipa">Ipa</Link></li>
          <li><Link to="/rubia">Rubia</Link></li>
          <li><Link to="/roja">Roja</Link></li>
          <li><Link to="/negra">Negra</Link></li>
          {/* <li><Link to="/productos/beer">Productos</Link></li> */}
          
          <li className="cerrar" onClick={this.menuToggle}>
              <img src={Cerrar} alt="" width="20"/>
          </li>
        </ul>
        <div className="nav-carrito">
            <span>0</span>
            <Link to="/cart">
              <img src= {CarritoIcono} alt="" width="20"/>
            </Link>
        </div>
      </nav>
  </header>
  )
}
}
export default NavBar
