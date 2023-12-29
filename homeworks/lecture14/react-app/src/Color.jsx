/* eslint-disable react/prop-types */
import { Card, Input } from "antd";

// eslint-disable-next-line react/prop-types
const Color = ({ idx, colors, handleInputEnter }) => {
//   console.log(idx, colors);
  return (
    <>
      <Card
        style={{
          borderColor: "black",
          backgroundColor: colors[idx].backgroundColor,
        }}
      >
        <p>Component name</p>
        <Input
          id={idx}
          style={{ marginBottom: "100px" }}
          onKeyDown={(event)=>handleInputEnter(event)}
          // eslint-disable-next-line react/prop-types
        ></Input>
      </Card>
    </>
  );
};

export default Color;
