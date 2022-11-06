import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { getProductByCategory } from '../../Service/Firestore/Productos'
import { useAsync } from '../../Hooks/useAsync'

const NavBar = () => {

  const {data:categories,error, loading} = useAsync(getProductByCategory, [])

  if (error){
    <h1>Hubo Un error</h1>
}

if(loading) {
    return <nav className = "Navbar">
    <div className ="contLeft">
    <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo"></img></NavLink>
    </div>
    <div>
    <CartWidget />
    </div>
</nav>

}


    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
        <Link id="item" to = '/'> <img className='logo1'  src={logo} /> </Link>
        <Link id="item" to = '/'><p id="p">INICIO</p> </Link>
        <div className="Categories">
            {
                categories.map(cat=>(
                    
                    <NavLink   key={cat.id} to={`/category/${cat.slug}`} >
                    
                    </NavLink>
                    ))
                }
            
            </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default NavBar