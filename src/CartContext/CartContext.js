import  {useState, useEffect, useContext,createContext} from 'react'



export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children} ) => {
	const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)



    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

	useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])

	const addProduct = (productToAdd, quantity) => {

        if(!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: prod.quantity + productToAdd.quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }


const clearCart = () => setCart ([ ])




const isInCart = (id) => { return cart.find (product =>product.id ===id) ? true : false }

const removeProduct = (id) => setCart (cart.filter ( product => product.id !== id))



const getTotal = () => {
	let total = 0
	cart.forEach(prod => {
		total += prod.quantity * prod.price
	})
	
	return total 
}

const getQuantity = (id) => {
    let initial= 0
    const itemInCart = cart.find((item)=> item.id === id)
    if(itemInCart){
    return item.quantity  
    }else{
    return initial
    }
}

return (
<CartContext.Provider value= {{
	clearCart, 
	isInCart, 
	removeProduct, 
	addProduct, 
	getQuantity,
    getTotal,
	totalQuantity,
	total,
	cart 
	}}>
		{children}
</CartContext.Provider> 
)
}

export const useCart = () => {
    return useContext(CartContext)
}