import { useEffect, useMemo, useState } from "react";

export default function Card(props) {
  const { id, initName, color, setName } = props;

  const [input, setInput] = useState(initName);

  const cardStyle = useMemo(
    () => ({
      height: "200px",
      width: "300px",
      border: "1px solid black",
      backgroundColor: color,
    }),
    [color]
  );

  const cardTextStyle = useMemo(
    () => ({
      color: "black",
      marginLeft: "5%",
    }),
    []
  );

  const cardInputStyle = useMemo(
    () => ({
      height: "25px",
      width: "85%",
      margin: "3% 5%",
    }),
    []
  );

  useEffect(() => {
    setName(id, input);
  }, [input]);

  return (
    <div style={cardStyle} key={id}>
      <div style={cardTextStyle}>Component name:</div>
      <input
        style={cardInputStyle}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
