import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './hw1/Todo.jsx';
import PhoneScreen from './hw2/PhoneScreen.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Todo />*/}
      <PhoneScreen />
    </>
  )
}

export default App
