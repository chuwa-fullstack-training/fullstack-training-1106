import React, { useState, useCallback, memo } from 'react';

const Form = memo(({ onSubmit }) => {
  console.log('update Form');

  return (
    <form onSubmit={onSubmit}>
      <input />
    </form>
  );
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

export default App;
