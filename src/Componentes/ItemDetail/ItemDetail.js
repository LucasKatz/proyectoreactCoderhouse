import'../AsyncMock'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../CartContext/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, img, name, category, price, description, stock }) => {

    const [goToCart, setGoToCart] = useState (false)
    const {addProduct, getQuantity, isInCart} = useCart ( );


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
                ? <Link to='/cart'>Terminar Compra</Link>

                :<ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded}/>
            } 
        </div>
    )
}

export default ItemDetail