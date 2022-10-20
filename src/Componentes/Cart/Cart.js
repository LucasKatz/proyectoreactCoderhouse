
import { Link } from 'react-router-dom';
import {useCart} from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart";
import '../AsyncMock'

const Cart = () => {
    const {cart,totalPrice,totalProducts} = useCart ();

    console.log (cart);
    if (cart.length === 0)
    return (
        <div>
        <p> No hay elementos en el carrito </p>
        <Link to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            <span id="contador">{totalProducts}</span>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p>Total a Pagar: ${totalPrice}</p>
        </div>

    )
}

export default Cart 