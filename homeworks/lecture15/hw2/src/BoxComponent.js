// ComponentBox.js
import React, {useEffect, useState} from 'react';
import './style.css'
import {useParams} from 'react-router-dom';
import axios from "axios";

function BoxComponent({placeholders, setPlaceholders}) {
    const {id, color} = useParams();
    const [colors, setColors] = useState({
        first: 'white',
        second: '#ffd6a5', // 桃色
        third: '#fdffb6', // 淡黄色
        forth: '#caffbf', // 浅绿色
        fifth: '#9bf6ff', // 天蓝色
        sixth: '#a0c4ff', // 淡紫色
    });
    const handleInputChange = (e) => {
        const newText = e.target.value;
        setPlaceholders(prevPlaceholders => ({
            ...prevPlaceholders,
            [id]: newText,
        }));
    };

    return (
        <div className="component" style={{backgroundColor: colors[color]}}>
            <label className='component-label'>Component {id} name: </label>
            <input
                type="text"
                className='component-input'
                value={placeholders[id]}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default BoxComponent;
