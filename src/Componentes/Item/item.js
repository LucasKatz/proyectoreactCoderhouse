import {Link} from 'react-router-dom'
import '../Item/Item.css'

const Item = ({ id, img, name, price }) => {
    return (
    <div className="contenedorLista">

        <div className="cardContainer">
            <div className="imageCard">
                <img src={img} alt="" />
            </div>
            <div className="detailsCard">
                <h5>{name}</h5>
            </div>
            <div className="price">
                <h5>${price}</h5>
            </div>
            <div className="link">
                <button><Link className="link" to = {`/detail/${id}`}>Ver detalle</Link></button>
            </div>
        </div>
    
    </div>
    )
}

export default Item