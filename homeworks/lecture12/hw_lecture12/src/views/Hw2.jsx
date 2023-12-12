import React from "react";
import './Hw2.css'

class Hw2 extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div id="Container">
        <div className="Header">Header</div>
        <div className="Nav">Nav</div>
        <div className="Content">
          <div className="Aside">Aside</div>
          <div className="Section">Section</div>
        </div>
        <div className="Footer">Footer</div>
      </div>
    );
  }
}

export default Hw2;
