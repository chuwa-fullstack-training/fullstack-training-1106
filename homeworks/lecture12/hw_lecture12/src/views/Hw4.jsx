import React from 'react';

class Hw4 extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            output: ''
        }
    }

    handleTransfer = (e) =>{
        if(isNaN(Number(e.target.value))){
            this.setState(()=>({
                output: e.target.value
            }));
        }
        else{
            let suffixes = ['th','st','nd','rd','th'];
            let number = parseInt(e.target.value, 10);
            let index = ( number > 10 && number < 20 ) || number % 10 > 4 ? 4: number % 10;
            this.setState(()=>({
                output: e.target.value + suffixes[index]
            }));
        }
    };
    
    render(){
        return(
            <>
                <input name='input' onChange={this.handleTransfer}></input>
                <input name='output' readOnly value={this.state.output}></input>
            </>
        );
    }
}

export default Hw4;