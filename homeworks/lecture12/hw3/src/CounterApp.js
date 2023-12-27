import React, { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = (value) => {
        setCount(count + value);
    };

    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <button onClick={() => increment(1)}>+1</button>
            <button onClick={() => increment(10)}>+10</button>
            <button onClick={() => increment(100)}>+100</button>
            <button onClick={() => increment(1000)}>+1000</button>
            <div style={{ fontSize: '24px', margin: '20px' }}>{count}</div>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default CounterApp;
