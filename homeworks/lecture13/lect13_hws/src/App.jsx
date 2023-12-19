import { useState } from 'react';
import TodoList from './component/TodoList'
import HW2 from './component/HW2'
import './App.css'
function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'hw1': return <TodoList />;
      case 'hw2': return <HW2 />;
      default: return <div>Please click a hw div</div>
    }
  }
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <div className='hw' onClick={() => setActiveComponent("hw1")}><button>hw1</button></div>
        <div className='hw' onClick={() => setActiveComponent("hw2")}><button>hw2</button></div>
      </div>
      <div className='answer' >{renderComponent()}</div>
    </div>
  )
}

export default App
