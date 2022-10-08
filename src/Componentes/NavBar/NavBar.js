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
                <h1 id="item" aria-current="page">Inicio</h1>
                </Link>
              </li>
              <li >
                <a id="item">Novedades</a>
              </li>
              <li>
                <a id="item">Catalogo</a>
              </li>
              <li>
                <a id="item">Contacto</a>
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