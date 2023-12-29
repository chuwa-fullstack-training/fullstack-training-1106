import { Row, Col, Cascader } from "antd";
import Color from "./Color";
import { useState } from "react";

const colorOptopns = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "brown",
    label: "Brown",
  },
  {
    value: "purple",
    label: "Purple",
  },
];

const ColorList = () => {
  const [selected, setSelected] = useState(0);
  const [colors, setColors] = useState([
    {
      value: 0,
      label: 1,
      backgroundColor: "",
    },
    {
      value: 1,
      label: 2,
      backgroundColor: "",
    },
    {
      value: 2,
      label: 3,
      backgroundColor: "",
    },
    {
      value: 3,
      label: 4,
      backgroundColor: "",
    },
    {
      value: 4,
      label: 5,
      backgroundColor: "",
    },
    {
      value: 5,
      label: 6,
      backgroundColor: "",
    },
  ]);

  const handleComponentSelectChange = (value) => {
    setSelected(value[0]);
  };

  const handleColorSelectChange = (value) => {
    setColors((prev) => {
      const updated = [...prev];
      updated[selected].backgroundColor = value[0];
      return updated;
    });
  };

  const handleInputKeydown = (event) => {
    if (event.key === "Enter") {
      setColors((prev) => {
        const updated = [...prev];
        updated[selected].label = event.target.value;
        return updated;
      });
    }
  };
  
  return (
    <div style={{ padding: "100px" }}>
      <Cascader
        options={colors}
        onChange={handleComponentSelectChange}
        placeholder="Please select"
        style={{ marginLeft: "30%" }}
        defaultValue={[0]}
      />
      <Cascader
        options={colorOptopns}
        onChange={handleColorSelectChange}
        placeholder="Choose color"
        style={{ marginLeft: "20%" }}
      />
      <Row gutter={30} style={{ marginTop: "10px" }}>
        <Col span={8}>
          <Color
            idx={0}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
        <Col span={8}>
          <Color
            idx={1}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
        <Col span={8}>
          <Color
            idx={2}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
      </Row>
      <Row gutter={30} style={{ marginTop: "10px" }}>
        <Col span={8}>
          <Color
            idx={3}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
        <Col span={8}>
          <Color
            idx={4}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
        <Col span={8}>
          <Color
            idx={5}
            colors={colors}
            handleInputEnter={handleInputKeydown}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ColorList;
