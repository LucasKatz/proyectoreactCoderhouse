import { useState, useEffect } from 'react'
import { getProducts } from '../AsyncMock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer =({ }) => {
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
        <div className='conteinerLista '>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer