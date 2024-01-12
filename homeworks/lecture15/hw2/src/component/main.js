import { useState } from 'react';
import '../App.css';
import CustomComponent from './component';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const [allComponents, setAllComponents] = useState(["first", "second", "third", "fourth", "fifth", "sixth"].map((item, ind) => { return { id: ind, name: item, backgroundColor: "white" } }))
  const colors = ["choose a color", "white", "red", "blue", "green"];

  const [selectedComponent, setSelectedComponent] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    let newComponents = [...allComponents];
    if (event.target.value !== "choose a color") {
      newComponents[selectedComponent].backgroundColor = event.target.value;
      navigate(`/${event.target.value}`, { replace: false })
    } else {
      navigate('/', { replace: false })
    }
    setAllComponents(newComponents);
  };

  const handleNameChange = (id, newName) => {
    let newComponents = [...allComponents];
    newComponents[id].name = newName;
    setAllComponents(newComponents);
  }

  return (
    <div className="App">
      <div className='labels'>
        <Select
          value={selectedComponent}
          onChange={handleComponentChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ width: "120px", height: "30px", marginTop: "20px" }}
        >
          {
            allComponents.map((item) => (
              <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
            ))
          }
        </Select>

        <Select
          value={selectedColor}
          onChange={handleColorChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ width: "120px", height: "30px", marginTop: "20px" }}
        >
          {
            colors.map(item => (
              <MenuItem value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ margin: "0px" }}
        >
          {allComponents.map((item) => (
            <Grid item md={4} key={item.id}>
              <CustomComponent component={item} handleNameChange={handleNameChange} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Main;
