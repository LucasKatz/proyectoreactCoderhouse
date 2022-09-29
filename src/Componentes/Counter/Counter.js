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
        if (count >0){
        setCount (count -1)
        }
    }


    return (
        <div>
            <h1>Contador</h1>

            <div className="contador">
                <button onClick={decrement}> - </button> 
                <h2>{count}</h2>
                <button onClick={increment}> + </button>
            </div>
        </div>
        )
} 

export default Counter
