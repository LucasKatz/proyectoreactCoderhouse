import { Link } from 'react-router-dom';
import {useCart} from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart";
import '../Cart/Cart.css'
import Swal from "sweetalert2";


const Cart = () => {
    const {cart,total,clearCart} = useCart ();
    

    if (cart.length === 0)
    return (
        <div>
        <p className='vacio'> No hay elementos en el carrito </p>
        <Link className='Button' to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p>Total a Pagar: ${total}</p>
            <button className="Button" onClick={() =>{ clearCart() 
            Swal.fire({
                title: "Carrito Vacio",
                icon: "success",
                buttons: true,
                dangerMode: true,
            
            })
            }}
            >Limpiar carrito</button>
            <button className='Button'><Link className='innerLink'  to='/checkout' >Checkout</Link></button>
        </div>

    )
}

export default Cart 