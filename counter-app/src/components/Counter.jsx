import React,{useState} from "react";
import "./Counter.css"

let initialState=0;
export function Counter(){
    const [counter,setCounter]=useState(initialState);

    const handleIncrement=()=>{
        setCounter((prev)=>prev+1);
    }

    const handledecrement=()=>{
        setCounter((prev)=>prev-1)
    }

    const handleReset=()=>{
        setCounter(initialState);
    }
    return(
        <>
            <div className="container">
                <h1>{counter}</h1>
                <div>
                    <button onClick={handledecrement} className="decrementBtn">Decrement</button>
                    <button onClick={handleReset} className="resetBtnz">Reset</button>
                    <button onClick={handleIncrement} className="incrementBtn">Increment</button>
                </div>
            </div>
        </>
    )
}