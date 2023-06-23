import React from "react";

const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

// @withLogger
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

const MyComponentWithLogger = withLogger(MyComponent);

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponentWithLogger />
        {/* <MyComponent /> */}
      </div>
    );
  }
}

export default App;
