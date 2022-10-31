import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase'
import { createAdaptedProductFromFirestore } from '../../Adapter/adaptedproduct'



    export const getProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
                const collectionRef = categoryId 
                ? query(collection(dataBase, 'products'), where('category', '==', categoryId))
                : collection(dataBase, 'products')
    
            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        return createAdaptedProductFromFirestore(doc)
                    })
                    resolve(productsAdapted)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
