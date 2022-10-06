const products =  [
    { 
        id: '1', 
        name: 'Adel', 
        price: 1000, 
        category: 'lampara', 
        img:'/Images/Adel.JPG' , 
        stock: 25, 
        description:'Descripcion pendiente - falta completar'
    },
    { 
        id: '2',
        name: 'Berilo', 
        price: 800, 
        category: 'lampara', 
        img:'/Images/berilo.JPG', 
        stock: 16, 
        description:'Descripcion pendiente - falta completar'
    },
    {
        id: '3', 
        name: 'Double Sh', 
        price: 1200, 
        category: 'lampara', 
        img:'/Images/doublesh.JPG', 
        stock: 10, 
        description:'Descripcion pendiente - falta completar'
},
{ 
        id: '4', 
        name: 'Lampara Hat', 
        price: 1200, 
        category: 'lampara', 
        img:'/Images/hatlamp.JPG', 
        stock: 10, 
        description:'Descripcion pendiente - falta completar'
},
{ 
        id: '5', 
        name: 'Lampara Tokio', 
        price: 1200, 
        category: 'lampara', 
        img:'/Images/tokio.webp', 
        stock: 10, 
        description:'Descripcion pendiente - falta completar'
},
{
        id: '6', 
        name: 'Lampara Tuel', 
        price: 1200, 
        category: 'lampara', 
        img:'/Images/tuel.JPG', 
        stock: 10, 
        description:'Descripcion pendiente - falta completar'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}