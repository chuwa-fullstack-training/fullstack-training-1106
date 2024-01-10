import * as React from 'react'
import styles from './hw2.module.css'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white',
        },
        select: { padding: "4px 10px" }
      },
    },
  },
});

const COLORS = ["antiquewhite", "azure", "blueviolet", "chocolate", "cornflowerblue", "crimson", "dodgerblue", "forestgreen", "navy"]
const BOXES = [{ color: "", inputValue: 'first' },
{ color: "white", inputValue: 'second' },
{ color: "white", inputValue: 'third' },
{ color: "white", inputValue: 'forth' },
{ color: "white", inputValue: 'fifth' },
{ color: "white", inputValue: 'sixth' }];
function HW2() {
  const [selectedBoxIndex, setSelctedBoxIndex] = React.useState(0);
  const [boxes, setBoxes] = React.useState(BOXES);
  const handleInputChange = (index) => (e) => {
    const newBoxes = [...boxes];
    newBoxes[index].inputValue = e.target.value;
    setBoxes(newBoxes);
  };
  const handleBoxSelectChange = (e) => {
    setSelctedBoxIndex(e.target.value);
  };
  const handleColorChange = (e) => {
    const newBoxes = [...boxes];
    newBoxes[selectedBoxIndex].color = e.target.value;
    setBoxes(newBoxes);
  };
  const firstRowBoxes = boxes.slice(0, 3);
  const secondRowBoxes = boxes.slice(3, 6);
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <ThemeProvider theme={theme}>
          <FormControl>
            <Select value={selectedBoxIndex} onChange={handleBoxSelectChange}
              sx={{ backgroundColor: "grey", color: "white" }}
            >
              {boxes.map((_, index) => {
                return <MenuItem key={index} value={index}>{boxes[index].inputValue}</MenuItem>
              })}
            </Select>
          </FormControl>
          <FormControl>
            <Select onChange={handleColorChange}
              value="default" sx={{ backgroundColor: "grey", color: "white" }}>
              <MenuItem value="default" disabled sx={{ display: "none" }}>Choose Color</MenuItem>
              {COLORS.map((color, index) => {
                return <MenuItem key={index} value={color}>{color}</MenuItem>
              })}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.rows}>
          {firstRowBoxes.map((box, index) => (
            <Box
              key={index}
              color={box.color}
              inputValue={box.inputValue}
              onInputChange={handleInputChange(index)}
            />
          ))}
        </div>
        <div className={styles.rows}>
          {secondRowBoxes.map((box, index) => (
            <Box
              key={index + 3}
              color={box.color}
              inputValue={box.inputValue}
              onInputChange={handleInputChange(index + 3)}
            />
          ))}
        </div>
      </div>
    </div >
  )
}


// eslint-disable-next-line react/prop-types
const Box = ({ color, inputValue, onInputChange }) => {
  return <div className={styles.Box} style={{ backgroundColor: color }}>
    <div>Component name:</div>
    <input
      className={styles.Input}
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
  </div>
}
export default HW2
