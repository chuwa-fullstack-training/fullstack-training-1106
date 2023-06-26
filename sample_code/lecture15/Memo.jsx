import React, { useState, useMemo } from 'react';

const calculateFactorial = n => {
  console.log('Calculating factorial');
  return n <= 1 ? 1 : n * calculateFactorial(n - 1);
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setInc(i => i + 1)}>Increment</button>
      <h2>
        Factorial of {number} is {factorial}
      </h2>
      <h3>Increment count: {inc}</h3>
    </div>
  );
};

export default FactorialCalculator;
