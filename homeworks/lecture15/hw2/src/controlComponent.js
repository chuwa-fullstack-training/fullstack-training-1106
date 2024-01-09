import React, {useState} from 'react';
import ComponentBox from './ComponentBox';
import './style.css'

const ControlComponent = () => {
    const [colors, setColors] = useState({
        first: 'white',
        second: '#ffd6a5', // 桃色
        third: '#fdffb6', // 淡黄色
        forth: '#caffbf', // 浅绿色
        fifth: '#9bf6ff', // 天蓝色
        sixth: '#a0c4ff', // 淡紫色
    });
    const [placeholders, setPlaceholders] = useState({
        first: 'first',
        second: 'second',
        third: 'third',
        forth: 'forth',
        fifth: 'fifth',
        sixth: 'sixth',
    });
    const [value, setValue] = useState("first");
    const handlePlaceholderChange = (newPlaceholder, id) => {
        setPlaceholders(prevPlaceholders => ({
            ...prevPlaceholders,
            [id]: newPlaceholder
        }));
    };

    const handleSelectChange1 = (event) => {
        setValue(event.target.value);
    };

    const handleSelectChange2 = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const color = selectedOption.dataset.color;
        setColors(prevPlaceholders => ({
            ...prevPlaceholders,
            [value]: color
        }));
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
                        <option value="white" data-color='white'>white</option>
                        <option value="#ffd6a5" data-color = '#ffd6a5'>peach</option>
                        <option value="#fdffb6" data-color = '#fdffb6'> pale yellow</option>
                        <option value="#caffbf" data-color = '#caffbf'> light green</option>
                        <option value="Sky-Blue" data-color = '#9bf6ff'> sky blue</option>
                        <option value="Light-Purple" data-color = '#a0c4ff'> light purple</option>
                    </select>
                </div>
            </div>
            <div className="container">
                <ComponentBox id="first" placeholder={placeholders.first} bgColor={colors.first} onChange={handlePlaceholderChange}/>
                <ComponentBox id="second" placeholder={placeholders.second} bgColor={colors.second} onChange={handlePlaceholderChange}/>
                <ComponentBox id="third" placeholder={placeholders.third} bgColor={colors.third} onChange={handlePlaceholderChange}/>
                <ComponentBox id="forth" placeholder={placeholders.forth} bgColor={colors.forth} onChange={handlePlaceholderChange}/>
                <ComponentBox id="fifth" placeholder={placeholders.fifth} bgColor={colors.fifth} onChange={handlePlaceholderChange}/>
                <ComponentBox id="sixth" placeholder={placeholders.sixth} bgColor={colors.sixth} onChange={handlePlaceholderChange}/>
            </div>
        </div>
    );
}

export default ControlComponent;