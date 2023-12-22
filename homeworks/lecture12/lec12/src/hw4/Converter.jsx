import {useState} from 'react';

function Converter() {
  const [res, setRes] = useState('');

  const changeHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value === '1') {
      setRes('1st');
    } else if (value === '2') {
      setRes('2nd');
    } else if (value === '3') {
      setRes('3rd');
    } else if (value == parseInt(value)) {
      setRes(`${value}th`);
    } else {
      setRes(value);
    }
  }

  return (
    <div className='converter-content'>
      <input onChange={changeHandler}></input>
      <input disabled value={res}></input>
    </div>
  );
}

export default Converter;