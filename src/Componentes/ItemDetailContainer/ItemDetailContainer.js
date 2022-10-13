import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ChaoticOrbit } from '@uiball/loaders'


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