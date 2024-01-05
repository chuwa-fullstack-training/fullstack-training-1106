/* What will be the output when the user types in the input field: */

function App() {
  const [value, setValue] = useState("");

  function handleChange(event) {
	  setValue(event.target.value);
  }
 
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You entered: {value}</p>
    </div>
  );
}