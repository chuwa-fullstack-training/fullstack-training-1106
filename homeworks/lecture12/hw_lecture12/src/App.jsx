import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
//import './App.css'

import Hw1 from './views/Hw1';
import Hw2 from './views/Hw2';
import Hw3 from './views/Hw3';
import Hw4 from './views/Hw4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hw1' element ={<Hw1/>}></Route>
        <Route path='/hw2' element ={<Hw2/>}></Route>
        <Route path='/hw3' element ={<Hw3/>}></Route>
        <Route path='/hw4' element ={<Hw4/>}></Route>
        <Route path='/' element = {<Navigate to='/hw1' replace></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
