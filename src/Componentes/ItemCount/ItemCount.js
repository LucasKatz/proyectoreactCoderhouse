import React from "react"
import {useState} from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemCount  = ({ initial=1, onAdd}) => {

let stock = 5

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };
    
    const decrement = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
    };



    return (
        
        <div>
            
                <div className="contador">
                    <button id="addButton" className="elements" onClick={decrement}> - </button> 
                    <h2 className="elements">{quantity}</h2>
                    <button id="subsButton"  className="elements" onClick={increment}> + </button>
                </div>

                <div className="botonFinal">
                    
                { quantity > 0 ? 
                    <button id ="cartButton" className="ui bottom attached button" onClick={() => onAdd (quantity)}>
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-shopping" />
                        Agregar al Carrito
                    </button>    
                : 
                    <button id ="cartButton" className="ui bottom attached button disabled" onClick={() => onAdd (quantity)}>
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-shopping" />
                        Agregar al Carrito
                    </button>
                } 
                </div>

        </div>
        
        )
} 

export default ItemCount
