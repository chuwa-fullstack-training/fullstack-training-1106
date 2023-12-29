import { Component } from "react";

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "status bar",
    };
  }

  handleClick = (event) => {
    this.setState({ selected: event.target.innerText });
  };

  render() {
    return (
      <div className={"screen-container"}>
        <div className={"inner-container"}>
          <p>{this.state.selected}</p>
          <div className={"button-container"}>
            <button onClick={this.handleClick}>1</button>
            <button onClick={this.handleClick}>2</button>
            <button onClick={this.handleClick}>3</button>
            <button onClick={this.handleClick}>4</button>
            <button onClick={this.handleClick}>5</button>
            <button onClick={this.handleClick}>6</button>
            <button onClick={this.handleClick}>7</button>
            <button onClick={this.handleClick}>8</button>
            <button onClick={this.handleClick}>9</button>
            <button onClick={this.handleClick}>10</button>
            <button onClick={this.handleClick}>11</button>
            <button onClick={this.handleClick}>12</button>
            <button onClick={this.handleClick}>13</button>
            <button onClick={this.handleClick}>14</button>
            <button onClick={this.handleClick}>15</button>
            <button onClick={this.handleClick}>16</button>
            <button onClick={this.handleClick}>17</button>
            <button onClick={this.handleClick}>18</button>
            <button onClick={this.handleClick}>19</button>
            <button onClick={this.handleClick}>20</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
