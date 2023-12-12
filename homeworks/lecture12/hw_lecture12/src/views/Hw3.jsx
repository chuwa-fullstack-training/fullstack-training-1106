import React from 'react';
import './Hw3.css';

class Hw3 extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            count: 0
        }
    }

    handleClick = (num)=>{
        this.setState( preState => ({
            count: num ===0 ? 0: preState.count + num
        }));
    };

    render(){
        return(
            <>
                <div>
                    <button onClick={()=>this.handleClick(1)}>+1</button>
                    <button onClick={()=>this.handleClick(10)}>+10</button>
                    <button onClick={()=>this.handleClick(100)}>+100</button>
                    <button onClick={()=>this.handleClick(1000)}>+1000</button>
                </div>
                <button onClick={()=>this.handleClick(0)}>Reset</button>
                <h1>{this.state.count}</h1>
            </>        
        );
    }
}

export default Hw3;