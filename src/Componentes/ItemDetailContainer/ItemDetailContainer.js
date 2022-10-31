import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ChaoticOrbit } from '@uiball/loaders'
import { getProduct } from '../../Service/Firestore/Productos'


const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {
        setLoading (true)

        getProduct(productId)
        .then (product =>{
            setProducts(product)
        })

        .catch(error => {
            console.log(error)
        })
    
        .finally(() => {
            setLoading(false)
        })
    }, [productId])


    if(loading) {
        return <div className='conteinerLista '>
        <div className="chaotic-orbit">{ ChaoticOrbit } </div>
        </div>
    }

    return  (
        <div>
            <ItemDetail key= {products.id} {... products}/>
        </div>
    )
}


export default ItemDetailContainer