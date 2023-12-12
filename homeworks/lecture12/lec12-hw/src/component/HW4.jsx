
import { useState } from 'react'
import '../App.css'
function HW4() {
  const [inputValue, setInputValue] = useState(null);
  const [displayContent, setDisplayContent] = useState(null);
  const convert = (num) => {
    const arr = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    console.log((v - 20) % 10);
    return num + (arr[(v - 20) % 10] || arr[v] || arr[0]);
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (/^\d+$/.test(value)) {
      setDisplayContent(convert(parseInt(value, 10)));
    }
    else {
      setDisplayContent(value);
    }
  }
  return (
    <div className="hw4Container">
      <input value={inputValue} onChange={handleInputChange}></input>
      <div className='output'>{displayContent}</div>
    </div>
  )
}
export default HW4
