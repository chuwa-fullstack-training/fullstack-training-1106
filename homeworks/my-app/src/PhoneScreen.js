import React, { useState } from 'react';
import './PhoneScreen.css'; // Import a CSS file for styling if needed

const PhoneScreen = () => {
  const [buttonEffects, setButtonEffects] = useState({
    button1: false,
    button2: false,
    button3: false,
    // Add more buttons as needed
  });

  const handleButtonClick = (button) => {
    setButtonEffects((prevEffects) => ({
      ...prevEffects,
      [button]: !prevEffects[button],
    }));
  };

  return (
    <div className="phone-screen">
      <div className={`button ${buttonEffects.button1 ? 'active' : ''}`} onClick={() => handleButtonClick('button1')}>
        Button 1
      </div>
      <div className={`button ${buttonEffects.button2 ? 'active' : ''}`} onClick={() => handleButtonClick('button2')}>
        Button 2
      </div>
      <div className={`button ${buttonEffects.button3 ? 'active' : ''}`} onClick={() => handleButtonClick('button3')}>
        Button 3
      </div>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default PhoneScreen;
