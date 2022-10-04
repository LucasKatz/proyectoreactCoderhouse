
  import { useState, useEffect } from 'react'
import { getProducts } from '../AsyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer =({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return  (
        <div>
            <h1>{greeting}</h1>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer