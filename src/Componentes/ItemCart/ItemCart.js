import React from 'react'
import '../ItemCart/ItemCart.css'
import '../AsyncMock'
import { useCartContext } from '../../CartContext/CartContext'



const ItemCart = ({ img, name, price, quantity}) => {
    const {removeProduct} = useCartContext ();

return (    
    <div className='containerCart'>
        <img src={img} alt={name}/>
        <h1 className="name">{name}</h1>
        <p className="price">Precio U: ${price}</p>
        <p className="SubTotal">Subtotal: ${quantity * price}</p>
        <button onClick={()=>removeProduct(product.id)}> Eliminar</button>

    </div>
)
}

export default ItemCart