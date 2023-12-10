import React, {useState} from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = (value) => {
        setCount(count + value);
    }

    return (
        <div>
       
            <button className="button key button-1" onClick={() => increment(1)}>+1</button> 
            <button className="button key button-10" onClick={() => increment(10)}>+10</button>
            <button className="button key button-100" onClick={() => increment(100)}>+100</button>
            <button className="button key button-1000" onClick={() => increment(1000)}>+1000</button> 
        

            <h1>{count}</h1>
       </div>
  
    )
}

export default Counter;