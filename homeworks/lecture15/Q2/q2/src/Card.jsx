import "./App.css";

function Card(props) {
  const { nameIndex, name, color, handleChangeName } = props;

  const handleChange = (event) => {
    const inputName = event.target.value;
    if (inputName !== "" && inputName !== name){
      handleChangeName(nameIndex, inputName);
    }
  };

  return (
    <div style={{ backgroundColor: color }} className="card-item">
      <div>Component Name</div>
      <input
        onChange={handleChange}
        placeholder={name}
        className="card-input"
        type="text"
      />
    </div>
  );
}

export default Card;