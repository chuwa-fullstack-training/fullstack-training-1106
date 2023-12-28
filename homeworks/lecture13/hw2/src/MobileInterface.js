
import React, { useState } from 'react';
import './MobileInterfaceStyles.css';
const MobileInterface = () => {
  const [lastClicked, setLastClicked] = useState('No button clicked yet');
  const handleButtonClick = (buttonNumber) => {
    setLastClicked(`Button ${buttonNumber} was clicked`);
  };
  const lastRowIndex = 16;
  return (
    <div className="mobile-container">
      <div className="status-bar">{lastClicked}</div>
      <div className="buttons-grid">
        {Array.from({ length: 16 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        <div className="quick-access-bar">
            {Array.from({ length: 4 }, (_, index) => (
                <button
                    key={index + lastRowIndex + 1}
                    onClick={() => handleButtonClick(index + lastRowIndex + 1)}>
                    {index + lastRowIndex + 1}
                </button>
            ))}
        </div>
    </div>
  );
};

export default MobileInterface;
