import React from 'react'
import '../ItemCart/ItemCart.css'
import { useCart} from '../../CartContext/CartContext'



const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();

return (    
    <div className='containerCart'>
        <h1 className="name">{product.name}</h1>
        {product.img}
        <p className="price">Precio U: ${product.price}</p>
        <p className="cantidad">Cantidad {product.quantity}</p>
        <p className="SubTotal">Subtotal: ${product.quantity * product.price}</p>
        <button onClick={()=>removeProduct(product.id)}> Eliminar</button>

    </div>
)
}

export default ItemCart