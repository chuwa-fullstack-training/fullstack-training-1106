import {useState} from 'react';
import './PhoneScreen.css';

function PhoneScreen() {
  const [curVal, setCurVal] = useState('');

  const buttonGenerator = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
      res.push((
        <button onClick={(e) => handleClick(e)}>{i}</button>
      ));
    }
    return res;
  }

  const handleClick = (e) => {
    setCurVal(e.target.innerText);
  }

  return (
    <div className='phone-content'>
      <div className='screen-content'>
        <div className='status-content'>
          <p>status bar: {curVal}</p>
        </div>
        <div className='button-content-top'>
          {buttonGenerator(1, 16)}
        </div>
        <div className='button-content-bottom'>
          {buttonGenerator(17, 20)}
        </div>
      </div>
    </div>
  );
}

export default PhoneScreen;