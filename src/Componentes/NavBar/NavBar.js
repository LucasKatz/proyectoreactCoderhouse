import './NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartiWidget'


const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src={logo} />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Novedades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Catalogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Contacto</a>
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