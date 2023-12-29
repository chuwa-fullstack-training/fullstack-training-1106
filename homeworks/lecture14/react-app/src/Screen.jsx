import { useState } from "react";
import classes from "./Screen.module.css";

const Screen = () => {
  const [selected, setSelected] = useState("status bar");
  const handlClick = (event) => {
    setSelected(event.target.innerText);
  };
  return (
    <div className={classes["screen-container"]}>
      <div className={classes["inner-container"]}>
        <p>{selected}</p>
        <div className={classes["button-container"]}>
          <button onClick={handlClick}>1</button>
          <button onClick={handlClick}>2</button>
          <button onClick={handlClick}>3</button>
          <button onClick={handlClick}>4</button>
          <button onClick={handlClick}>5</button>
          <button onClick={handlClick}>6</button>
          <button onClick={handlClick}>7</button>
          <button onClick={handlClick}>8</button>
          <button onClick={handlClick}>9</button>
          <button onClick={handlClick}>10</button>
          <button onClick={handlClick}>11</button>
          <button onClick={handlClick}>12</button>
          <button onClick={handlClick}>13</button>
          <button onClick={handlClick}>14</button>
          <button onClick={handlClick}>15</button>
          <button onClick={handlClick}>16</button>
          <button onClick={handlClick}>17</button>
          <button onClick={handlClick}>18</button>
          <button onClick={handlClick}>19</button>
          <button onClick={handlClick}>20</button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
