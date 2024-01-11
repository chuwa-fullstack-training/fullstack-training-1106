import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout = ({ compName, selection, setSelection, handleColorChange }) => {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    width: "500px",
    alignItems: "center",
    margin: "auto",
  };

  const selectorStyle = {
    height: "30px",
    margin: "auto",
    fontSize: "15px",
  };

  const colorSelection = [
    "antiquewhite",
    "azure",
    "blueviolet",
    "chocolate",
    "cornflowerblue",
    "crimson",
    "dodgerblue",
    "forestgreen",
    "navy",
  ];

  return (
    <div style={containerStyle}>
      <Select
        style={selectorStyle}
        value={compName[selection]}
        onChange={(e) => {
          const newIndex = compName.indexOf(e.target.value);
          setSelection(newIndex);
          console.log(`/${e.target.value}`);
          navigate(`/${e.target.value}`);
        }}
      >
        {compName.map((name, idx) => (
          <MenuItem key={idx} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>

      <Select
        style={selectorStyle}
        value={colorSelection[selection]}
        onChange={(e) => handleColorChange(e.target.value)}
        displayEmpty
      >
        {colorSelection.map((color, idx) => (
          <MenuItem key={idx} value={color}>
            {color}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Layout;
