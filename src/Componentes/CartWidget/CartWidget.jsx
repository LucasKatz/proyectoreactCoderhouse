import Carrito from "../Assets/images.png"
import  "../CartWidget/CartWidget.css"
import { useCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const CartWidget = () => {
  const {cart,totalPrice, totalProducts} = useCartContext ();
    return (
      <div className="container-widget">
        <div className="widget">
          <img id="carrito" src={Carrito} alt="" />
          <span id="contador">{totalProducts}</span>
          {cart.map(product => <ItemCart key={product.id} product = {product}/>)}
          <p>Total a Pagar: ${totalPrice}</p>
        </div>
      </div>
    );
  }

  export default CartWidget