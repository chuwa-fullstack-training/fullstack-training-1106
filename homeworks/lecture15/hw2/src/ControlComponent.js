import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './style.css';

const ControlComponent = ({placeholders, setPlaceholders }) => {
    const [colors, setColors] = useState({
        first: 'first',
        second: 'first', // 桃色
        third: 'first', // 淡黄色
        forth: 'first', // 浅绿色
        fifth: 'first', // 天蓝色
        sixth: 'first', // 淡紫色
    });
    const [selector1, setSelector1] = useState("first");
    const [selector2, setSelector2] = useState("first");
    const navigate = useNavigate();
    const handleSelectChange1 = (event) => {
        setSelector1(event.target.value);
        navigate(`/${event.target.value}/${colors[event.target.value]}`);
        //
    };

    const handleSelectChange2 = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        setSelector2(selectedOption.value);
        setColors(prevPlaceholders => ({
            ...prevPlaceholders,
            [selector1]: selectedOption.value
        }));
        navigate(`/${selector1}/${selectedOption.value}`);



    };

    return (
            <div>
                <div className="selector-container">
                    <div className="selector">
                        <select id="selectComponent" name="selectComponent" onChange={handleSelectChange1}>
                            <option value="first">{placeholders.first}</option>
                            <option value="second">{placeholders.second}</option>
                            <option value="third">{placeholders.third}</option>
                            <option value="forth">{placeholders.forth}</option>
                            <option value="fifth">{placeholders.fifth}</option>
                            <option value="sixth">{placeholders.sixth}</option>
                        </select>
                    </div>
                    <div className="selector">
                        <select id="color" name="color" onChange={handleSelectChange2}>
                            <option value="first">white</option>
                            <option value="second">peach</option>
                            <option value="third"> pale yellow</option>
                            <option value="forth"> light green</option>
                            <option value="fifth"> sky blue</option>
                            <option value="sixth"> light purple</option>
                        </select>
                    </div>
                </div>
            </div>
    );
}

export default ControlComponent;
