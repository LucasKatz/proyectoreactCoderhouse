import'../AsyncMock'

const ItemDetail = ({ img, name, category, price }) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price">{price}</p>
        </div>
    )
}

export default ItemDetail