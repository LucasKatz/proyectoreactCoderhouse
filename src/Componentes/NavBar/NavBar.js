import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartiWidget'
import { Link } from 'react-router-dom'

const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
          <img src={logo} />
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to = '/'>
                <li id="item">Inicio</li>
                </Link>
              </li>
              <li >
              <Link to = '/category/lampara'>
                <a id="item">Lamparas</a>
                </Link>
              </li>
              <li>
              <Link to = '/category/velador'>
                <a id="item">Veladores</a>
              </Link>
              </li>
              <li>
              <Link to = '/category/reflector'>
                <a id="item">Reflectores</a>
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