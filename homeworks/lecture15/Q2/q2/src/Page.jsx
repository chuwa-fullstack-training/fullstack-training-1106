import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Card from './Card';
import {Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import { useAuth } from './AuthContext';

const PrePage = ({colorChoosed}) => {
    const { cards, 
        setCards,
        selectedCard, 
        setSelectedCard } = useAuth();

    useEffect(() => {
        const toModify = cards.map((card, index) => 
            index === selectedCard ? {...card, color : colorChoosed} : card
        );
        setCards(toModify);
    })
    
    const handleChangeName = (selectedIndex, newName) => {
        const toModify = cards.map((card, index) =>
            index === selectedIndex ? { ...card, name: newName } : card
        );
        setCards(toModify);
    };

    return (
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
    );
}

function Page() {
    const { cards, 
        setCards,
        selectedCard, 
        setSelectedCard } = useAuth();

    const navigate = useNavigate();
  
    const handleSelectedCard =  (event) => {
        const selectedValue = event.target.value;
        const selectedIndex = cards.findIndex(card => card.name === selectedValue);
        setSelectedCard(selectedIndex);
        navigate(`/${cards[selectedIndex].color}`);
      }
    
    const handleSelectColor = (event) => {
        const selectedColor = event.target.value;
        navigate(`/${selectedColor}`);
    }


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
            label="Color"
            onChange={handleSelectColor}
          >
            <MenuItem value="white">white</MenuItem>
            <MenuItem value="blue">blue</MenuItem>
            <MenuItem value="purple">purple</MenuItem>
            <MenuItem value="red">red</MenuItem>
            <MenuItem value="brown">brown</MenuItem>
            <MenuItem value="green">green</MenuItem>
            <MenuItem value="yellow">yellow</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Routes>
        <Route 
            path={"/"}
            element={<PrePage/>}
        />
        <Route 
            key={'white'} 
            path={"/white"}
            element={<PrePage
                colorChoosed='white'
            />}
        />
        <Route 
            key={'blue'} 
            path={'/blue'}
            element={<PrePage
                colorChoosed='blue'
            />}
        />
        <Route 
            key={'purple'} 
            path={'/purple'}
            element={<PrePage
                colorChoosed='purple'
            />}
        />
        <Route 
            key={'red'} 
            path={'/red'}
            element={<PrePage
                colorChoosed='red'
            />}
        />
        <Route 
            key={'brown'} 
            path={'/brown'}
            element={<PrePage
                colorChoosed='brown'
            />}
        />
        <Route 
            key={'green'} 
            path={'/green'}
            element={<PrePage
                colorChoosed='green'
            />}
        />
        <Route 
            key={'yellow'} 
            path={'/yellow'}
            element={<PrePage
                colorChoosed='yellow'
            />}
        />
      </Routes>
    </div>

    
  );
}

export default Page;