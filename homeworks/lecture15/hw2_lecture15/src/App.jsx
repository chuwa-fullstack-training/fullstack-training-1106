import "./ColorComponents.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dropdown, Flex, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  const colors = [
    {
      key: "0",
      label: "white",
    },
    {
      key: "1",
      label: "yellow",
    },
    {
      key: "2",
      label: "blue",
    },
    {
      key: "3",
      label: "red",
    },
    {
      key: "4",
      label: "orange",
    },
    {
      key: "5",
      label: "orchid",
    },
    {
      key: "6",
      label: "gray",
    },
  ];

  const [cards, setCards] = useState([
    {
      id: "0",
      name: "first",
      color: "white",
    },
    {
      id: "1",
      name: "second",
      color: "white",
    },
    {
      id: "2",
      name: "third",
      color: "white",
    },
    {
      id: "3",
      name: "fourth",
      color: "white",
    },
    {
      id: "4",
      name: "fifth",
      color: "white",
    },
    {
      id: "5",
      name: "sixth",
      color: "white",
    },
  ]);

  const [names, setNames] = useState([
    {
      key: "0",
      label: "first",
    },
    {
      key: "1",
      label: "second",
    },
    {
      key: "2",
      label: "third",
    },
    {
      key: "3",
      label: "fourth",
    },
    {
      key: "4",
      label: "fifth",
    },
    {
      key: "5",
      label: "sixth",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState();

  const handleCardNameChange = (e) => {
    const newCards = [...cards];
    newCards[e.target.id].name = e.target.value;

    const newNames = [...names];
    newNames[e.target.id].label = e.target.value;

    setCards(newCards);
    setNames(newNames);
  };

  const clickColorsMenu = ({ key }) => {
    const newCards = [...cards];

    const selectedColor = colors.find((item) => item.key === key).label;

    const card = newCards.find((item) => item.name === selectedCard.name);

    card.color = selectedColor;

    setCards(newCards);
  };

  const clickNamesMenu = ({ key }) => {
    const selectedCard = cards.find((item) => item.id === key);
    setSelectedCard(selectedCard);
    navigate(`/${selectedCard.name}`);
  };

  return (
    <>
      <Flex gap={64} justify="center" align="center">
        <Dropdown
          menu={{ items: names, onClick: clickNamesMenu }}
          trigger={["click"]}
        >
          <Button type="primary" style={{ backgroundColor: "gray" }}>
            {selectedCard ? selectedCard.name : "Choose a Component"}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown
          menu={{ items: colors, onClick: clickColorsMenu }}
          trigger={["click"]}
        >
          <Button type="primary" style={{ backgroundColor: "gray" }}>
            Choose Color
            <DownOutlined />
          </Button>
        </Dropdown>

        <Button type="primary" style={{ backgroundColor: "gray" }} onClick={()=>{navigate("/");}}>
            Show All
        </Button>
      </Flex>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={cards.map((card, idx) => (
              <div
                key={idx}
                className="card"
                style={{ backgroundColor: card.color }}
              >
                <p>Component name:</p>
                <input
                  id={idx}
                  value={card.name}
                  onChange={handleCardNameChange}
                ></input>
              </div>
            ))}
          ></Route>
          {cards.map((card, idx) => (
            <Route
              key={idx}
              path={`/${card.name}`}
              element={
                <div
                  className="card"
                  style={{ backgroundColor: card.color }}
                >
                  <p>Component name:</p>
                  <input
                    value={card.name}
                    onChange={handleCardNameChange}
                  ></input>
                </div>
              }
            ></Route>
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
