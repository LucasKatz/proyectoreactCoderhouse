import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById("2").then(response => {
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