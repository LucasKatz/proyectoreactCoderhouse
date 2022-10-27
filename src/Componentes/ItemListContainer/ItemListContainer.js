import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemListContainer.css'
import { ChaoticOrbit } from '@uiball/loaders'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase'



const ItemListContainer =({ }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(dataBase, 'products'), where('category', '==', categoryId))
        : collection(dataBase, 'products')

    getDocs(collectionRef).then(response => {

        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()


            return { id: doc.id, ...data }
        })

        setProducts(productsAdapted)

    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })  
}, [categoryId])

    if(loading) {
        return <div className='conteinerLista '>
        <div className="chaotic-orbit">{ ChaoticOrbit } </div>
        </div>
    }

    return  (
        <div className='conteinerLista '>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer