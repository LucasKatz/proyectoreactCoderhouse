import Item from "../Item/item"
import '../ItemList/ItemList.css'
import Counter from '../Counter/Counter'

const ItemList = ({products}) => {
    return (
        
        <div className="contenedorLista">
          {products.map((prod) => {
            return ( 
              <div className="cardContainer" key={prod.id}>
                <div className="imageCard">
                  <img src={prod.img} alt="" />
                </div>
                <div className="detailsCard">
                  <h5>{prod.name}</h5>
                </div>
                <div className="category">
                  <h3>{prod.category}</h3>
                </div>
                <div className="price">
                    <h5>{prod.price}</h5>
                </div>
                <div className="counter">
                    <Counter/>
                </div>
            </div>
            );
          })}
        </div>
      );
    };


export default ItemList