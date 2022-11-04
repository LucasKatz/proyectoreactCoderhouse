import React from 'react'
import '../ItemCart/ItemCart.css'
import { useCart} from '../../CartContext/CartContext'
import Swal from "sweetalert2";



const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();

return (    
    <div className='containerCart'>
        <h1 className="name">{product.name}</h1>
        <img src={product.img}/>
        <p className="priceCart">Precio Unitario: ${product.price}</p>
        <p className="cantidadCart">Cantidad {product.quantity}</p>
        <p className="SubTotalCart">Subtotal: ${product.quantity * product.price}</p>
        <button className='eliminar' onClick={()=>{removeProduct(product.id)
        Swal.fire({
            title: "Producto Eliminado",
            icon: "warning",
            buttons: true,
        })
        }}> Eliminar</button>

    </div>
)
}

export default ItemCart