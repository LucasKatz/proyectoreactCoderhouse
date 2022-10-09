import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer =({ }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


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