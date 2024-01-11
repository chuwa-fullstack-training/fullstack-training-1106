import { React, useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Home = () => {
  const initNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const initColors = new Array(6).fill("white");

  const [compName, setcompName] = useState(initNames);
  const [colors, setColors] = useState(initColors);
  const [selection, setSelection] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${compName[0]}`);
  }, []);

  const setName = (compName, setcompName) => {
    return (id, newName) => {
      const copy = [...compName];
      copy[id] = newName;
      setcompName(copy);
      navigate(`/${newName}`);
    };
  };

  const handleColorChange = (e) => {
    const copy = [...colors];
    copy[selection] = e.target.value;
    setColors(copy);
    const $select = document.querySelector("#colorSelection");
    $select.value = "defaultValue";
  };

  return (
    <>
      <Layout props={{ compName, setSelection, handleColorChange }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Routes>
          <Route path="/">
            {colors.map((color, id) => (
              <Route
                path={compName[id]}
                element={
                  <Card
                    key={id}
                    id={id}
                    initName={compName[id]}
                    color={color}
                    setName={setName(compName, setcompName)}
                  />
                }
              />
            ))}
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Home;
