import { useState } from 'react';
import HW1 from './component/HW1'
import HW2 from './component/HW2'
import HW3 from './component/HW3'
import HW4 from './component/HW4'
import './App.css'
function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'hw1': return <HW1 />;
      case 'hw2': return <HW2 />;
      case 'hw3': return <HW3 />;
      case 'hw4': return <HW4 />;
      default: return <div>Please click a hw div</div>
    }
  }
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className='hw' onClick={() => setActiveComponent("hw1")}>hw1</div>
        <div className='hw' onClick={() => setActiveComponent("hw2")}>hw2</div>
        <div className='hw' onClick={() => setActiveComponent("hw3")}>hw3</div>
        <div className='hw' onClick={() => setActiveComponent("hw4")} >hw4</div>
      </div>
      <div className='answer' >{renderComponent()}</div>
    </div>
  )
}

export default App
