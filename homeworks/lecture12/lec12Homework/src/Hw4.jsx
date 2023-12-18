import React from 'react';

class Hw4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: '',
        }
    }

    stringifyNumber = () => {
        const number = parseInt(this.state.inputNumber, 10)
        if(isNaN(number)){
            return this.state.inputNumber;
        }
        const lastDigit = number % 10;
        
        if (lastDigit == 1 && number%100 != 11) {
            return this.state.inputNumber + 'st'
        } else if (lastDigit == 2 && number%100 != 12) {
            return this.state.inputNumber + "nd";
        } else if (lastDigit == 3 && number%100 != 13) {
            return this.state.inputNumber + "rd";
        } else {
            return this.state.inputNumber + "th";
        }
    }

    handleChange = (e) => {
        this.setState({
            inputNumber: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Provide your input' value={this.state.inputNumber} onChange={this.handleChange} />
                <input type='text' readOnly value={this.stringifyNumber()} />
            </div>
        )
    }
}

export default Hw4
