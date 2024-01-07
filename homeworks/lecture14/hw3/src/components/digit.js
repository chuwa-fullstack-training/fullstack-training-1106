import "./digit.css";
import React from "react";

export default function Digit({ handlePress, number }) {
   return (
      <div className="digit-container" onClick={handlePress}>
         <p className="digit-text">{number}</p>
      </div>
   );
}
