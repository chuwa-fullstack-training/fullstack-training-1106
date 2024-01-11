import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const { compName, setSelection, handleColorChange } = props.props;

  const colorSelection = useMemo(() => [
    "antiquewhite",
    "azure",
    "blueviolet",
    "chocolate",
    "cornflowerblue",
    "crimson",
    "dodgerblue",
    "forestgreen",
    "navy",
  ]);

  const navigate = useNavigate();

  const containerStyle = useMemo(
    () => ({
      display: "flex",
      flexDirection: "row",
      height: "100px",
      width: "500px",
      alignItems: "center",
      margin: "auto",
    }),
    []
  );

  const selectorStyle = useMemo(
    () => ({
      height: "30px",
      margin: "auto",
      fontSize: "15px",
    }),
    []
  );

  return (
    <div style={containerStyle}>
      {/* input field value */}
      <select
        style={selectorStyle}
        onChange={(e) => {
          setSelection(e.target.selectedIndex);
          navigate(`/${compName[e.target.selectedIndex]}`);
        }}
      >
        {compName.map((name, idx) => (
          <option key={idx} id={idx} value={name}>
            {name}
          </option>
        ))}
      </select>
      {/* color  */}
      <select
        id="colorSelection"
        style={selectorStyle}
        onChange={handleColorChange}
        defaultValue="defaultValue"
      >
        <option value="defaultValue" hidden>
          Choose color
        </option>
        {colorSelection.map((color, idx) => (
          <option key={idx} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Layout;
