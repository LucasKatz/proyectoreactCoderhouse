import { act } from "react-dom/test-utils"
import  {useState, useContext} from 'react'
import react from 'react'

const CartContext = react.createContext ()
export  const useCartContext = () =>  useContext (CartContext)

const CartProvider = ({children} ) => {
	
const [cart, setCart ] = useState ( [ ] )

const addProduct = (item, newQuantity) => {
const newCart = cart.filter ( prod =>prod.id !== item.id)
newCart.push ({... item, quantity: newQuantity})
setCart (newCart)
}

const clearCart = () => setCart ( [ ] )

const isInCart = (id) => { return cart.find (product =>product.id ===id) ? true : false }

const removeProduct = (id) => setCart (cart.filter ( product => product.id !== id))

const totalPrice  = () => { return cart.reduce ((prev,act) => prev + act.quantity * act.price,0);}

const totalProduct = () => {
	return cart.reduce ((acumulador,productoActual) => acumulador + productoActual.quantity
	)}


return (
<CartContext.Provider value= {{
	clearCart, 
	isInCart, 
	removeProduct, 
	addProduct, 
	totalPrice, 
	totalProduct,
	cart 
	}}>
		{children}
</CartContext.Provider> 
)
}

export default CartProvider
