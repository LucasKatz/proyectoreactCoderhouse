import Item from "../Item/item"
import '../ItemList/ItemList.css'

const ItemList = ({ products }) => {

    return (
        <div className ="cardConteiner">
            { products.map(prod => <Item className="cards" key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}

export default ItemList