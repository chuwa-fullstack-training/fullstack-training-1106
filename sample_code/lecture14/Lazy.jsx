import React, { Component, Suspense, lazy } from "react";

// const RequestComponent = lazy(() => import("./Request"));

class Test extends Component {
  componentDidMount() {
    console.log("--componentDidMount--");
  }

  render() {
    return (
      <div>
        <h1>This is lazy loading</h1>
      </div>
    );
  }
}

const LazyComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => <Test />
        });
      }, 2000);
    })
);

const LoadingText = () => <div>Loading...</div>;
class App extends Component {
  // componentDidMount() {
  //   console.log("app mount");
  // }
  render() {
    return (
      <div className="context_box" style={{ marginTop: "50px" }}>
        <Suspense fallback={<LoadingText />}>
          <LazyComponent />
          {/* <RequestComponent /> */}
        </Suspense>
      </div>
    );
  }
}

export default App;
