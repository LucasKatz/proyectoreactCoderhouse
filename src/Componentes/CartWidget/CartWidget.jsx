import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext) 

    return(
        <div className="widget">
          <button className="CartWidget"> 
            <Link to='/cart'>  <FontAwesomeIcon className='icon' icon ={faCartShopping} /></Link>
            <span className='number' id='number'>{totalQuantity}</span>
          </button>
        </div>
    );
}

export default CartWidget


