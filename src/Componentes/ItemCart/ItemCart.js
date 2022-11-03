import React from 'react'
import '../ItemCart/ItemCart.css'
import { useCart} from '../../CartContext/CartContext'
import Swal from "sweetalert2";



const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();

return (    
    <div className='containerCart'>
        <h1 className="name">{product.name}</h1>
        {product.img}
        <p className="price">Precio Unitario: ${product.price}</p>
        <p className="cantidad">Cantidad {product.quantity}</p>
        <p className="SubTotal">Subtotal: ${product.quantity * product.price}</p>
        <button onClick={()=>{removeProduct(product.id)
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