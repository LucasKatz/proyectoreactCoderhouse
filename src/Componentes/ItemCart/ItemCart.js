import React from 'react'
import '../ItemCart/ItemCart.css'
import '../AsyncMock'


const ItemCart = ({ img, name, category, price, description }) => {

return (    
    <div className='containerCart'>
        <img src={img} alt={name}/>
        <h1 className="name">{name}</h1>
        <h3 className="category">{category}</h3>
        <p className="price">${price}</p>
        <p className= "description ">{description}</p>
    </div>
)
}

export default ItemCart