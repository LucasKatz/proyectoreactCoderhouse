import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import {useCart} from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const {cart,total,totalQuantity} = useCart ();
    

    const pedido = {
        buyer: {
            name: 'Lucas Katz',
            phone: '1122876495',
            mail: 'l.katz92@gmail.com',
            address: 'Calle Falsa 123'
        },
        items: cart.map(prod => ({name:prod.name, quantity:prod.quantity, price: prod.price })),
        total: total
    }

    const handleClick = () => {
        const dataBase = getFirestore ();
        const ordersCollection = collection (dataBase, 'Pedidos');
        addDoc (ordersCollection, pedido)
        .then (({id}) => console.log (id))
    }

    const {docs} = pedido


    if (cart.length === 0)
    return (
        <div>
        <p> No hay elementos en el carrito </p>
        <Link to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            <span id="contador">{totalQuantity}</span>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p>Total a Pagar: ${total}</p>
            <button onClick={handleClick}>Generar Pedido</button>
        </div>

    )
}

export default Cart 