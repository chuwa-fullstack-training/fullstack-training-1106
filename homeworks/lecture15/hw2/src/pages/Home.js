import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Home = () => {
  const initNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const initColors = new Array(6).fill("white");

  const [compName, setCompName] = useState(initNames);
  const [colors, setColors] = useState(initColors);
  const [selection, setSelection] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${compName[0]}`);
  }, [compName, navigate]);

  const setName = (id, newName) => {
    const newCompName = [...compName];
    newCompName[id] = newName;
    setCompName(newCompName);
    navigate(`/${newName}`);
  };

  const handleColorChange = (newColor) => {
    const newColors = [...colors];
    newColors[selection] = newColor;
    setColors(newColors);
  };

  return (
    <React.Fragment>
      <Layout
        compName={compName}
        selection={selection}
        setSelection={setSelection}
        handleColorChange={handleColorChange}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Routes>
          <Route path="/">
            {colors.map((color, idx) => (
              <Route
                key={idx}
                path={compName[idx]}
                element={
                  <Card
                    id={idx}
                    initName={compName[idx]}
                    color={color}
                    setName={setName}
                  />
                }
              />
            ))}
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Home;