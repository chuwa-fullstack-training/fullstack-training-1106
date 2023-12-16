import { useState } from "react";
import "./ColorComponents.css";
import { Dropdown, Flex, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function ColorComponents() {
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

  const [selectedName, setSelectedName] = useState("Name");

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

    const card = newCards.find((item) => item.name === selectedName);

    card.color = selectedColor;

    setCards(newCards);
  };

  const clickNamesMenu = ({ key }) => {
    const selectedName = names.find((item) => item.key === key).label;
    setSelectedName(selectedName);
  };

  return (
    <>
      <Flex gap={64} justify="center" align="center">
        <Dropdown
          menu={{ items: names, onClick: clickNamesMenu }}
          trigger={["click"]}
        >
          <Button type="primary" style={{ backgroundColor: "gray" }}>
            {selectedName}
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
      </Flex>
      <div className="container">
        {cards.map((card, idx) => (
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
      </div>
    </>
  );
}
