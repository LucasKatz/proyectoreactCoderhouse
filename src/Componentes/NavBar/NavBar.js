import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
        <Link id="item" to = '/'> <img className='logo1'  src={logo} /> </Link>
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li  className='menu' >
                <Link id="item" to = '/'>
                <p id="p">INICIO</p>
                </Link>
              </li>
              <li className='menu'  >
              <Link id="item" to = '/category/Lampara'>
                <p id="p">LÁMPARAS</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Velador'>
                <p id="p">VELADORES</p>
              </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Reflector'>
                <p id="p">REFLECTORES</p>
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