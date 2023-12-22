import { useState } from 'react'
import './App.css'
import HW1 from './hw1/HW1.jsx';
import HW2 from './hw2/HW2.jsx';
import Counter from './hw3/Counter.jsx';
import Converter from './hw4/Converter.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HW1 />
      <HW2 />
      <Counter />
      <Converter />
    </>
  )
}

export default App
