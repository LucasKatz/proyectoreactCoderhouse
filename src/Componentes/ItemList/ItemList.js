import Item from "../Item/item"

const ItemList = ({ products }) => {

    return (
        <div>
            { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}

export default ItemList