import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase/index'
import { useNavigate } from "react-router-dom"
import { FormData } from "../Form/Form"
import  ClientForm  from '../Form/Form'


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)

    const completoDatos = () =>{
        setPersonalData(true)
    }

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const {name, surname, address, phone, email} = useContext(FormData)
    
    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: {name},
                    surname: {surname},
                    address: {address},
                    phone: {phone},
                    mail: {email}
                },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(dataBase)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(dataBase, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                console.log('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('error','hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Se esta procesando su pedido...</h1>
    }

    return (    
        <div>
            <h1>Completa los datos para generar la orden.</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button onClick={createOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )
}

export default Checkout