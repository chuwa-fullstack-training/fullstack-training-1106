import React from "react";
import Header from "./Header";
import Navigator from "./Navigator";
import Aside from "./Aside";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigator />
      <div className="main-content">
        <Aside />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
