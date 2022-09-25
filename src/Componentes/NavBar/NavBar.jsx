import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartiWidget'


const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
          <img src={logo} />
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <a id="item" aria-current="page">Inicio</a>
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