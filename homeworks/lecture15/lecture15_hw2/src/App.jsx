import * as React from 'react'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './App.css'

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
const BOXES = [{ color: "white", inputValue: 'first' },
{ color: "white", inputValue: 'second' },
{ color: "white", inputValue: 'third' },
{ color: "white", inputValue: 'forth' },
{ color: "white", inputValue: 'fifth' },
{ color: "white", inputValue: 'sixth' }];

function App() {
  const [selectedBoxIndex, setSelctedBoxIndex] = React.useState(0);
  const [boxes, setBoxes] = React.useState(BOXES);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  React.useEffect(() => {
    const match = currentPath.match(/\/box\/(\d+)/);
    if (match) {
      const index = parseInt(match[1], 10);
      if (index >= 0 && index <= boxes.length) {
        setSelctedBoxIndex(index);
      }
      else {
        setSelctedBoxIndex(0);
      }
    }
  }, [currentPath, boxes]);
  const handleInputChange = (index) => (e) => {
    const newBoxes = [...boxes];
    newBoxes[index].inputValue = e.target.value;
    setBoxes(newBoxes);
  };
  const handleBoxSelectChange = (e) => {
    const index = e.target.value;
    setSelctedBoxIndex(index);
    if (index === 0) {
      navigate("/");
    } else {
      navigate(`/box/${index}`);
    }
  };
  const handleColorChange = (e) => {
    if (selectedBoxIndex > 0) {
      const newBoxes = [...boxes];
      newBoxes[selectedBoxIndex - 1].color = e.target.value;
      setBoxes(newBoxes);
    }
  };
  return (
    <div className="container">
      <div className="selectContainer">
        <ThemeProvider theme={theme}>
          <FormControl>
            <Select value={selectedBoxIndex} onChange={handleBoxSelectChange} sx={{ backgroundColor: "grey", color: "white" }}>
              <MenuItem value={0}> Home</MenuItem>
              {boxes.map((_, index) => {
                return <MenuItem key={index + 1} value={index + 1}>{boxes[index].inputValue}</MenuItem>
              })}
            </Select>
          </FormControl>
          <FormControl><Select
            onChange={handleColorChange}
            value={selectedBoxIndex > 0 && boxes[selectedBoxIndex - 1].color != "white" ? boxes[selectedBoxIndex - 1].color : "default"}
            sx={{ backgroundColor: "grey", color: "white" }}
          >
            <MenuItem value="default" disabled>Choose Color</MenuItem>
            {COLORS.map((color, index) => (
              <MenuItem key={index} value={color}>{color}</MenuItem>
            ))}
          </Select>
          </FormControl>
        </ThemeProvider>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {boxes.map((box, index) => (
          <Route
            key={index + 1}
            path={`/box/${index + 1}`}
            element={<Box inputValue={box.inputValue} color={box.color} onInputChange={handleInputChange(index)} />}
          />
        ))}
      </Routes>
    </div >
  )
}

// eslint-disable-next-line react/prop-types
const Box = ({ color, inputValue, onInputChange }) => {

  return <div className="Box" style={{ backgroundColor: color }}>
    <div>Component name:</div>
    <input
      className="Input"
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
  </div>
}
const Home = () => {
  return <h1 style={{ textAlign: "center" }}>Home</h1>
}

export default App
