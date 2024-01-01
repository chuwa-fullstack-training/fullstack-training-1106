import "./digit.css";
import React from "react";

class Digit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="digit-container" onClick={this.props.handlePress}>
                <p className="digit-text">{this.props.number}</p>
            </div>
        );
    }
}

export default Digit;