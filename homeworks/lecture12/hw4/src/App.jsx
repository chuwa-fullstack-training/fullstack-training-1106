import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            output: ''
        };
    }
    handleInput = (event)=>{
       let inputStr = event.target.value;
       let outputStr = '';
       let addOn = ["st" , "nd", "rd", "th"];
       if( !isNaN(parseInt(inputStr)) && isFinite(parseInt(inputStr))){
            if(parseInt(inputStr) % 10 <=3 &&parseInt(inputStr) % 10 >= 1 && Math.floor(parseInt(inputStr) / 10) !== 1){
                outputStr = inputStr + addOn[parseInt(inputStr) % 10 -1];
            }else{
                outputStr = inputStr + addOn[3];
            }
        }else{
            outputStr = inputStr;
        }
       this.setState({output: outputStr});
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="provide your input"  onChange={this.handleInput}/>
                <input type="text" value={this.state.output} />
            </div>
        );
    }
}

export default App;