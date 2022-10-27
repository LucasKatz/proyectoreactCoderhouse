import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ChaoticOrbit } from '@uiball/loaders'
import { getDoc, doc } from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase'


const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {
        const docRef = doc(dataBase, 'products', productId)

        getDoc(docRef).then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProducts(productAdapted)
        }).finally(() => {
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