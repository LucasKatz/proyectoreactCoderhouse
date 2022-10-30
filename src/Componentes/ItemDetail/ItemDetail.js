
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../CartContext/CartContext'
import {  useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, img, name, category, price, description, stock }) => {

    const [goToCart, setGoToCart] = useState (false)
    const {addProduct, getQuantity} = useCart ( );


    const onAdd = (quantity) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description
        }
        setGoToCart(true);
        addProduct (productToAdd, quantity);
    }

    const quantityAdded = getQuantity(id)

    return (
        <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price">${price}</p>
            <p className= "description ">{description}</p>
            {   goToCart 
                ?<div>
                    <button><Link to='/'>Seguir Comprando</Link></button>
                    <button><Link to='/cart'>Terminar Compra</Link></button>
                </div>


                :<ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded}/>
            } 
        </div>
    )
}

export default ItemDetail