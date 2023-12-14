import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = (e) => {
    this.setState({count: this.state.count + Number(e.target.value)});
  }
  handleReset = () => {
    this.setState({count: 0});
  }
  render(){
  return(
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className = "container">
        <button value = {1} onClick={this.handleClick} className="button-7"> +1 </button>
        <button value = {10} onClick={this.handleClick} className="button-7"> +10 </button>
        <button value = {100} onClick={this.handleClick} className="button-7"> +100 </button>
        <button value = {1000} onClick={this.handleClick} className="button-7"> +1000 </button>
      </div>
      <button  onClick={this.handleReset} className="button-7"> Reset </button>
     
      <div>
        <p> {this.state.count}</p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  }
  
}

export default App;
