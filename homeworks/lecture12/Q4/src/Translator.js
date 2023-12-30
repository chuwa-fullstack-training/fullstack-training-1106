import React, { Component } from "react";

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    const isNumber = !isNaN(inputValue);

    // if (isNumber) {
    //   this.setState({
    //     output: `${this.getOrdinalNumber(inputValue)}`,
    //   });
    // } else {
    //   this.setState({
    //     output: inputValue,
    //   });
    // }

    this.setState({
      input: inputValue,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      if (!isNaN(this.state.input)) {
        setTimeout(() => {
          this.setState({
            output: `${this.getOrdinalNumber(this.state.input)}`,
          });
        }, 500);
      } else {
        setTimeout(() => {
          this.setState({
            output: this.state.input,
          });
        }, 500);
      }
    }
  }

  getOrdinalNumber = (number) => {
    if (!number) return "";

    const j = number % 10;
    const k = number % 100;

    let suffix = "";
    if (j === 1 && k !== 11) {
      suffix = "st";
    } else if (j === 2 && k !== 12) {
      suffix = "nd";
    } else if (j === 3 && k !== 13) {
      suffix = "rd";
    } else {
      suffix = "th";
    }

    return String(number) + suffix;
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "20px" }}>
          <input type="text" onChange={this.handleInputChange} />
        </div>
        <div>
          <input type="text" value={this.state.output} />
        </div>
      </div>
    );
  }
}

export default Translator;
