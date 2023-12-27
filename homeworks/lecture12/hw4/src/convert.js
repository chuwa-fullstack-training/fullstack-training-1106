import React, { useState } from 'react';

function NumberInput() {
    const [inputValue, setInputValue] = useState(0);

    // Function to convert number to ordinal
    function numberToOrdinal(n) {
        const parsed = parseInt(n, 10);
        if (isNaN(parsed)) {
            return n; // 如果不是数字，返回原始输入
        }
        const num = parseInt(n, 10);
        const s = ["th", "st", "nd", "rd"];
        const v = num % 100;
        return num + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    // Event handler for number change
    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
            />
            <label>{numberToOrdinal(inputValue)}</label>
        </div>
    );
}

export default NumberInput;
