import './CartWidget.css'
import Carrito from "../Assets/images.png"
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext) 

    return(
      <div className="container-widget">
        <div className="widget">
        <div to='/cart' className="CartWidget">
            <img id="carrito" src={Carrito} alt="" />
        </div>
        <div className="cart-span">
          <sup>{totalQuantity}</sup>
        </div>
        </div>
      </div>
    );
}

export default CartWidget