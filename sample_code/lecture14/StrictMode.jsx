import React from "react";

class ChildComponent extends React.Component {
  componentDidMount() {
    console.log("Child component has mounted");
  }

  render() {
    return <h2>Hello, I'm a child component!</h2>;
  }
}

class ParentComponent extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("Parent component will mount");
  }

  render() {
    return (
      <div>
        <h1>Hello, I'm a parent component!</h1>
        <ChildComponent />
      </div>
    );
  }
}

function App() {
  return (
    <React.StrictMode>
      <ParentComponent />
    </React.StrictMode>
  );
}

export default App;
