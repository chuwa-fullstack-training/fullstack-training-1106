import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }
  render(){
    return (
      <>
        
        <h1>Vite + React</h1>
        <div className="card">
          <input onChange={(e) => {
            let num = Number(e.target.value);
            if(!num) this.setState({value: e.target.value});
            else{
              
              if(num%10 === 1){
                this.setState({value: e.target.value + 'st'});
                return;
              } 
              if(num%10 === 2){
                this.setState({value: e.target.value + 'nd'});
                return;
              } 
              if(num%10 === 3){
                this.setState({value: e.target.value + 'rd'});
                return;
              } 
              else{
                this.setState({value: e.target.value + 'th'})
              } 
              
            }
            
          }}>
          </input>
          
          <input value={this.state.value}/>
          
        </div>
        
      </>
    )
  }
  
}

export default App
