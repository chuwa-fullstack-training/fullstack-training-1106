import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Card from './components/Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { name : "First", color : "white" },
    { name : "Second", color : "white" },
    { name : "Third", color : "white" },
    { name : "Fourth", color : "white" },
    { name : "Fifth", color : "white" },
    { name : "Sixth", color : "white" }
  ]);

  const [colorChoosed, setColorChoosed] = useState("");

  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard =  (event) => {
    const selectedValue = event.target.value;
    const selectedIndex = cards.findIndex(card => card.name === selectedValue);
    setSelectedCard(selectedIndex);
  }

  const handleSelectColor = (event) => {
    const selectedColor = event.target.value;
    const toModify = cards.map((card, index) => 
      index === selectedCard ? {...card, color : selectedColor} : card
    );
    setCards(toModify);

    setColorChoosed(selectedColor);
  }

  const handleChangeName = (selectedIndex, newName) => {
    const toModify = cards.map((card, index) =>
      index === selectedIndex ? { ...card, name: newName } : card
    );
    setCards(toModify);
  };
  

  return (
    <div className="app">
      <div className="Navbar">
        <FormControl className="element1"  fullWidth>
          <InputLabel id="module-select-label">Module</InputLabel>
          <Select
            labelId="module-select-label"
            id="module-select"
            value={selectedCard !== null && cards[selectedCard] ? cards[selectedCard].name : ''}
            label="Card"
            onChange={handleSelectedCard}
          >
            {cards.map((card, index) => (
              <MenuItem key={index} value={card.name}>
                {card.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="element2" fullWidth>
          <InputLabel id="color-select-label">Color</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-select"
            value={colorChoosed}
            label="Color"
            onChange={handleSelectColor}
          >
            <MenuItem value="white">white</MenuItem>
            <MenuItem value="blue">blue</MenuItem>
            <MenuItem value="lightblue">lightblue</MenuItem>
            <MenuItem value="red">red</MenuItem>
            <MenuItem value="lightred">lightred</MenuItem>
            <MenuItem value="green">green</MenuItem>
            <MenuItem value="lightgreen">lightgreen</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            nameIndex={index}
            name={card.name}
            color={card.color}
            handleChangeName={handleChangeName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
