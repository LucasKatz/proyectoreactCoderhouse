import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId ).then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return  (
        <div>
            <ItemDetail key= {products.id} {... products}/>
        </div>
    )
}

export default ItemDetailContainer