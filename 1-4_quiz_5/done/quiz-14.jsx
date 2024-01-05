/* Will the below code throw any error when adding a new item to the list? If yes, what error will that be? */

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: ["Item1", "Item2"] };
  }

  addItem() {
    const newItem = "Item3";
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  }

  render() {
    return (
      <div>
        <button onClick={this.addItem.bind(this)}>Add item</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
	  );
  }
}
export default App;