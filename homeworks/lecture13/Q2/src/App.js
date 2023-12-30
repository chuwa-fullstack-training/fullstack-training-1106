import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="status-bar">
        <div className="status-item">Time</div>
        <div className="status-item">Battery</div>
        <div className="status-item">Network</div>
      </div>
      <div className="content-container">
        <div className="middle-buttons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (number) => (
              <button
                key={number}
                className="button"
                onClick={() => alert(`Button ${number} clicked`)}
              >
                {number}
              </button>
            )
          )}
        </div>
        <div className="bottom-buttons">
          {[17, 18, 19, 20].map((number) => (
            <button
              key={number}
              className="button bottom-button"
              onClick={() => alert(`Bottom Button ${number} clicked`)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
