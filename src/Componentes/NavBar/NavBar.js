import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
          <img className='logo' src={logo} />
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li  className='menu' >
                <Link id="item" to = '/'>
                <p>Inicio</p>
                </Link>
              </li>
              <li className='menu'  >
              <Link id="item" to = '/category/Lampara'>
                <p>Lamparas</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Velador'>
                <p>Veladores</p>
              </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Reflector'>
                <p>Reflectores</p>
              </Link>
              </li>
            </ul>
          </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default NavBAr