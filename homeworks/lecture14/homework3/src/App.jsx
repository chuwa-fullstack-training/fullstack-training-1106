import './App.css'
import {useState} from 'react'

function App(){
  const [global,setGlobal] = useState(false);
  const [message,setMessage] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && message){
      const newTodos = [...todos];
      newTodos.push({key:todos.length,todo:message, isChecked:false});
      setTodos(newTodos);
      
    }
  }

  const handCheck = (e) => {
    const newTodos = todos.map((item) => (item.key === Number(e.target.id) ? {...item, isChecked:!item.isChecked}: item))
    setTodos(newTodos)
      
    }
    
  const handleComplete = () => {
    let newTodos;
    if(global){
      setGlobal(false);
      newTodos = todos.map((item) =>({
        ...item,isChecked: false
      }));
      setTodos(newTodos);
    }else{
      setGlobal(true);
      newTodos = todos.map((item) =>
      ({...item, isChecked: true}));
      setTodos(newTodos);
    }
  }
    
  const handleClear = () => {
    const newTodos = todos.map((item) =>
    ({...item, isChecked:false}));
    setTodos(newTodos);
  }
  
    return (
      <>
        <h1>Todos - ReactJs</h1>
        <input 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input-global"
        />
        <button onClick={handleClear}>
          Clear Completed Todos
        </button>
        <input type="checkbox" onClick={handleComplete}/>
        <span>Complete All</span>
        {todos.map((item,idx) => (<div key={idx}>
          <input type="checkbox" 
          key={idx}
          value={item.todo} 
          id={item.key} 
          checked={item.isChecked}
          onClick={handCheck}/>
          <span>{item.todo}</span>
        </div>)
        )}
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
  

export default App
