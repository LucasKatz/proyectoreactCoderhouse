
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ChaoticOrbit } from '@uiball/loaders'
import { getProduct } from '../../Service/Firestore/Productos'
import { useAsync } from "../../Hooks/useAsync";


const ItemDetailContainer =() => {

        const {productId} = useParams()
    
        const getProductsFromFirestore = () => getProduct(productId)
    
        const { data: products, error, loading } = useAsync(getProductsFromFirestore, [productId])
    

    if(loading) {
        return <div className='conteinerLista '>
        <div className="chaotic-orbit">{ ChaoticOrbit } </div>
        </div>
    }

    if(error) {
        return  <h1>Oops! Ha habido un error</h1>
    }

    return  (
        <div>
            <ItemDetail key= {products.id} {... products}/>
        </div>
    )
}


export default ItemDetailContainer