import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./color.css";

const ColorComponent = ({ name, color, onNameChange }) => {
  return (
    <div className="color-grid" style={{ backgroundColor: color }}>
      <p>Component name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
};

const ColorGrid = () => {
  const initialComponents = [
    { id: 1, name: "first", color: "white" },
    { id: 2, name: "second", color: "white" },
    { id: 3, name: "third", color: "white" },
    { id: 4, name: "fourth", color: "white" },
    { id: 5, name: "fifth", color: "white" },
    { id: 6, name: "sixth", color: "white" },
  ];

  const [components, setComponents] = useState(initialComponents);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const handleComponentSelection = (id) => {
    const selectedComp = components.find((comp) => comp.id === id);
    setSelectedComponent(selectedComp);
  };

  const handleNameChange = (id, newName) => {
    setComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === id ? { ...comp, name: newName } : comp
      )
    );

    if (selectedComponent && selectedComponent.id === id) {
      setSelectedComponent((prevSelected) => ({
        ...prevSelected,
        name: newName,
      }));
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);

    if (selectedComponent) {
      setComponents((prevComponents) =>
        prevComponents.map((comp) =>
          comp.id === selectedComponent.id ? { ...comp, color: color } : comp
        )
      );
    }
  };

  return (
    <>
      <div className="dropdown-container">
        <Dropdown onSelect={(id) => handleComponentSelection(Number(id))}>
          <Dropdown.Toggle variant="secondary">
          {`${selectedComponent ? selectedComponent.name : "Select"}`}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {components.map((comp) => (
              <Dropdown.Item key={comp.id} eventKey={comp.id}>
                {comp.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <DropdownButton
          variant="secondary"
          title="Choose color"
          onSelect={(color) => handleColorSelection(color)}
        >
          {["pink", "red", "green", "blue", "orange", "yellow"].map((color) => (
            <Dropdown.Item key={color} eventKey={color}>
              {color}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div className="container">
        <div className="row ">
          {components.slice(0, 3).map((component) => (
            <div className="col" key={component.id}>
              <ColorComponent
                id={component.id}
                name={component.name}
                color={component.color}
                onNameChange={(newName) =>
                  handleNameChange(component.id, newName)
                }
              />
            </div>
          ))}
        </div>
        <div className="row">
          {components.slice(3).map((component) => (
            <div className="col" key={component.id}>
              <ColorComponent
                id={component.id}
                name={component.name}
                color={component.color}
                onNameChange={(newName) =>
                  handleNameChange(component.id, newName)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorGrid;
