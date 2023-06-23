import React from "react";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "Aaron",
        age: 1
      }
    };
  }

  handerClick = () => {
    const { data } = this.state;
    data.age++;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="box">
        <div className="show">
          <div> Name: {data.name} </div>
          <div> Age: {data.age}</div>
          <button onClick={this.handerClick}>age++</button>
        </div>
      </div>
    );
  }
}

export default App;
