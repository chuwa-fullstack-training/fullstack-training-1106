import React, { useState } from "react";
import { Flex, Input } from "antd";
import "./color.css";

const ColorSelector = ({ components, onSelectComponent }) => {
  const handleChange = (e) => {
    onSelectComponent(e.target.value);
  };

  return (
    <div>
      <label htmlFor="componentSelector">Select Component:</label>
      <select id="componentSelector" onChange={handleChange}>
        {components.map((component) => (
          <option key={component.id} value={component.name}>
            {component.name}
          </option>
        ))}
      </select>
    </div>
  );
};
const Box = () => {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
  ]);
  const handelInputChange = (e) => {
    setInputText(e.target.value);
    setOptions(e.target.value);
  };
  return (
    <div className="box">
      <h4>Component name:</h4>
      <input type="text" value={inputText} onChange={handelInputChange} />
    </div>
  );
};

// const DynamicDropdown = () => {
//   const [options, setOptions] = useState(['first', 'second', 'third', 'fourth', 'fifth', 'sixth']);

const ColorComponent = ({ selectedComponent, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h2>{selectedComponent}</h2>
    </div>
  );
};

const Color = () => {
  const [selectedComponent, setSelectedComponent] = useState("first");
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
  ]);
  const handelInputChange = (e) => {
    setInputText(e.target.value);

  const handleSelectChange = (e) => {
    setSelectedComponent(e.target.value);

  };


  return (
    <>
      <div class="row mt-3">
        <div class="col">
          <select value={selectedComponent} onChange={handleSelectChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
   
      <div class="col">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Choose color{" "}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" herf="#">
              Red
            </a>
            <a class="dropdown-item">Green</a>
            <a class="dropdown-item">Blue</a>
            <a class="dropdown-item">Yellow</a>
            <a class="dropdown-item">Pink</a>
            <a class="dropdown-item">Orange</a>
          </div>
        </div>
      </div>
      </div>

      <div className="box">
        <h4>Component name:</h4>
        <input type="text" value={inputText} onChange={handelInputChange} />
      </div>
    </>
 
  );
};
};

export default Color;
