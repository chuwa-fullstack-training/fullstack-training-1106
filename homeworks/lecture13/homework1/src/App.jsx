
import './App.css'
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      global: false,
      message: '',
      todos: []
    }
  }

  handleChange = (e) => {
    this.setState({message:e.target.value})
  }
  handleKeyDown = (e) => {
    if(e.key === 'Enter' && this.state.message){
      // this.state.todos.push(this.state.message);
      // this.setState({todos:this.state.todos});
      this.setState((prevState) => ({
          todos: [...prevState.todos,{key:prevState.todos.length,todo:this.state.message, isChecked:false}]
        }));
      
    }
  }
  handCheck = (e) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((item) => (item.key === Number(e.target.id) ? {...item, isChecked:!item.isChecked}: item)
        )
      }));
    }
    
    

  handleComplete = () => {
    // if(this.state.global === true){
    //   this.setState((prevState) => ({
    //     global: false,
    //     todos:prevState.todos.map((item) =>({
    //       ...item,isChecked: false
    //     }))
    //   })

    //   )
    // }else{
    //   this.setState((prevState) => ({
    //     global:true,
    //     todos: prevState.todos.map((item) =>
    //     ({...item, isChecked: true}))
    //   }))
    // }
    this.state.global ? 
        this.setState((prevState) => ({
          global: false,
          todos:prevState.todos.map((item) =>({
            ...item,isChecked: false
          }))
        })) :
        this.setState((prevState) => ({
          global:true,
          todos: prevState.todos.map((item) =>
          ({...item, isChecked: true}))
        }))
      }
    
    

  handleClear = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((item) =>
      ({...item, isChecked:false}))
    }))
  }
  
  render(){

    return (
      <>
        <h1>Todos - ReactJs</h1>
        <input 
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        className="input-global"
        />
        <button onClick={this.handleClear}>
          Clear Completed Todos
        </button>
        <input type="checkbox" onClick={this.handleComplete}/>
        <span>Complete All</span>
        {this.state.todos.map((item,idx) => (<div key={idx}>
          <input type="checkbox" 
          key={idx}
          value={item.todo} 
          id={item.key} 
          checked={item.isChecked}
          onClick={this.handCheck}/>
          <span>{item.todo}</span>
        </div>)
        )}
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
  
}

export default App
