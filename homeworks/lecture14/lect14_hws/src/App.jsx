import { useState } from 'react';
import HW1 from './component/HW1'
import HW2 from './component/HW2'
import HW3 from './component/TodoList'
import './App.css'
function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'hw1': return <HW1 />;
      case 'hw2': return <HW2 />;
      case 'hw3': return <HW3 />;
    }
  }
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className='hw' onClick={() => setActiveComponent("hw1")}>hw1</div>
        <div className='hw' onClick={() => setActiveComponent("hw2")}>hw2</div>
        <div className='hw' onClick={() => setActiveComponent("hw3")}>hw3</div>
      </div>
      {/* <div className='answer' >{renderComponent()}</div> */}
      {renderComponent()}
    </div>
  )
}

export default App

