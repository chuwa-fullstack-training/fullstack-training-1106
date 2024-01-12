import React from "react";
import { Select, MenuItem, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout = ({ compName, selection, setSelection, handleColorChange }) => {
  const navigate = useNavigate();
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
    <Container
        sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        }}
    >
      <Select
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
    </Container>
  );
};

export default Layout;
