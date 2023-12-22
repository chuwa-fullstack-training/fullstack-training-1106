import {useState} from 'react';

function Counter() {
  const [res, setRes] = useState(0);
  return (
    <div className='counter-content'>
      <button onClick={() => setRes(res + 1)}>+1</button>
      <button onClick={() => setRes(res + 10)}>+10</button>
      <button onClick={() => setRes(res + 100)}>+100</button>
      <button onClick={() => setRes(res + 1000)}>+1000</button>
      <label>{res}</label>
    </div>
  );
}

export default Counter;