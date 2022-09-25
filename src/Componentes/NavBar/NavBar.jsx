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
                <a className="item" aria-current="page" href="#">Inicio</a>
              </li>
              <li >
                <a className="item" href="#">Novedades</a>
              </li>
              <li>
                <a className="item" href="#">Catalogo</a>
              </li>
              <li>
                <a className="item">Contacto</a>
              </li>
              <li className="cart">
              <a href="">
                <CartWidget />
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    )
    
}

export default NavBAr