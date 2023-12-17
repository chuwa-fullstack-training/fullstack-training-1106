
import './App.css'
import React from 'react'

const nums = Array.from({length:20},(_,index)=>index+1);
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: 'status bar'
    }
  }

  handleClick = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  
  render(){

    return (
      <>
        <h1>{this.state.message}</h1>
        <div className="grid-container">
        {nums.map((item) => (
          <>
          <button className="button" value={item} onClick={this.handleClick}>{item}</button>
          </>
        ))}
        </div>
      </>
    );
  }
  
}

export default App
