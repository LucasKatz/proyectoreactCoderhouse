import './CartWidget.css'
import Carrito from "../Assets/images.png"
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext) 

    return(
        <div className="widget">
          <button className="CartWidget"> 
            <Link className='carrito' to='/cart'>  <img id="carrito" src={Carrito} alt="" /></Link>
            <span className='number' id='number'>{totalQuantity}</span>
          </button>
        </div>
    );
}

export default CartWidget


