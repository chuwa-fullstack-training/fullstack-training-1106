import React from 'react';
import './Hw3.css'

class Hw3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleIncrement = (value) => {
        this.setState({
            count: this.state.count + value
        })
    }

    handleReset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className='container'>
                <p>Count: {this.state.count}</p>
                <button onClick={ () => this.handleIncrement(1)}>+1</button>
                <button onClick={ () => this.handleIncrement(10)}>+10</button>
                <button onClick={ () => this.handleIncrement(100)}>+100</button>
                <button onClick={ () => this.handleIncrement(1000)}>+1000</button>
                <div><button onClick={ () => this.handleReset()}>Reset</button></div>
            </div>
        )
    }
}
export default Hw3
