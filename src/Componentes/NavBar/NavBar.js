import './NavBar.css'

const NavBAr = () => {
    return (
        <nav>
            <div className="container-fluid">

                //insertar logo//

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>

                    <li className="nav-item">
                        <a className="nav-link active boton"  aria-current="page">Inicio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active boton" aria-current="page" >Novedades</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active boton" aria-current="page">Catalogo</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active boton"  aria-current="page">Contacto</a>
                    </li>

                </div>

                </div>

        </nav>
    )
    
}

export default NavBAr