import './Footer.css'
import logo from  "../NavBar/logo.svg.png"
import { Link } from 'react-router-dom'


const Footer = () => {  
    return (
<footer>
        <div class="container-fluid">
            <div class="row justify-content-evenly " id="fondoFooter">
                <div className="col-md-4 footerIzq d-flex flex-column  col-4 justify-center align-center" id="footerIzq">

                    <h2 className='titulo1'> Nosotros </h2>

                    <p className='texto'> Nuestra Empresa desde hace mas de 12 años se dedica a la comercialización de los mas diversos productos destinados a Iluminación decorativa, profesional y comercial. Así mismo ofrecemos nuestro servicio de asesoramiento y asistencia técnica al Profesional.</p>

                </div>
                <div className=' col-4 justify-center align-center'>
                <Link id="item" to = '/'> <img className='logo'  src={logo} /> </Link>
                </div>
                <div className=' col-4 justify-center align-center' id='footerDer'> 
                    <h2 className='textoDerecha'>Contactanos</h2>
                    <p className='textoDerecha'>Uruguay 1019 – C1016ACA <br></br>

                        Ciudad Autónoma de Buenos Aires<br></br>

                        Telefonos: 4811-0207 | 4816-2392<br></br>

                        ventas@imageniluminacion.com</p>
                </div>
                <div></div>
            </div>
        </div>
</footer> 
)}



export default Footer