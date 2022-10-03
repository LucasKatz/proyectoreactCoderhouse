const products =  [
    { 
        id: '1', 
        name: 'Adel', 
        price: 1000, 
        category: 'lampara', 
        img:'../public/images/Adel', 
        stock: 25, 
        description:'---'
    },
    { 
        id: '2',
        name: 'Berilo', 
        price: 800, 
        category: 'lampara', 
        img:'', 
        stock: 16, 
        description:'---'
    },
    {
        id: '3', 
        name: 'Double Sh', 
        price: 1200, 
        category: 'lampara', 
        img:'', 
        stock: 10, 
        description:'---'
},
{ 
        id: '4', 
        name: 'Lampara Hat', 
        price: 1200, 
        category: 'tablet', 
        img:'', 
        stock: 10, 
        description:'---'
},
{ 
        id: '5', 
        name: 'Lampara Tokio', 
        price: 1200, 
        category: 'tablet', 
        img:'', 
        stock: 10, 
        description:'---'
},
{
        id: '6', 
        name: 'Lampara Tuel', 
        price: 1200, 
        category: 'tablet', 
        img:'', 
        stock: 10, 
        description:'---'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}