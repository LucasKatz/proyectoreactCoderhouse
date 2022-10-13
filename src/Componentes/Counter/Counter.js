import React from "react"
import {useState} from 'react'
import '../Counter/Counter.css'

let stock = 5 

const Counter = () => {

    const [count, setCount] = useState (0)

    const increment = () => {
        if (count < stock) {
        setCount (count +1)
        }
    }

    const decrement = () => {
        if (count > 0){
        setCount (count -1)
        }
    }


    return (
        
        <div>
            
                <div className="contador">
                    <button id="addButton" className="elements" onClick={decrement}> - </button> 
                    <h2 className="elements">{count}</h2>
                    <button id="subsButton"  className="elements" onClick={increment}> + </button>
                </div>

                <div className="botonFinal">
                    
                { count > 0 ? 
                    <button id ="cartButton" className="ui bottom attached button">
                        
                        Agregar al Carrito
                    </button>    
                : 
                    <button id ="cartButton" className="ui bottom attached button disabled">
                        
                        Agregar al Carrito
                    </button>
                } 
                </div>

        </div>
        
        )
} 

export default Counter
