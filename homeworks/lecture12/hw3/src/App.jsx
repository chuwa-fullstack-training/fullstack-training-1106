import React from 'react';

class App extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        amount: 0
    }
   }
   handleClickOne = ()=>{
    this.setState({ amount: this.state.amount + 1}, ()=>{
        console.log("amount added 1");
    });
   }
   handleClickTen = ()=>{
    this.setState({ amount: this.state.amount + 10}, ()=>{
        console.log("amount added 10");
    });
   }
   handleClickHundred = ()=>{
    this.setState({ amount: this.state.amount + 100}, ()=>{
        console.log("amount added 100");
    });
   }
   handleClickThousand = ()=>{
    this.setState({ amount: this.state.amount + 1000}, ()=>{
        console.log("amount added 1000");
    });
   }
    render(){
        return (
           <div>
            <div>
                <button onClick={this.handleClickOne}>+1</button>
                <button onClick={this.handleClickTen}>+10</button>
                <button onClick={this.handleClickHundred}>+100</button>
                <button onClick={this.handleClickThousand}>+1000</button>
            </div>
            <p>{this.state.amount}</p>
           </div>
        );
    }
}

export default App;