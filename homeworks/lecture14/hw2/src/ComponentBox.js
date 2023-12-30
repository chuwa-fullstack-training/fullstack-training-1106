// ComponentBox.js
import React from 'react';
import './style.css'
function ComponentBox({id, placeholder, bgColor, onChange }) {
    return (
        <div className="component" style={{ backgroundColor: bgColor }}>
            <label className='component-label'>Component {id} name: </label>
            <input type="text" className='component-input' placeholder={placeholder}  onChange={(e) => onChange(e.target.value, id)} />
        </div>
    );
}

export default ComponentBox;
