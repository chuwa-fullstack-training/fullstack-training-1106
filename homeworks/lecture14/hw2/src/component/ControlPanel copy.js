function ControlPanel({selectName, selectColor, pairs }){
    const colors = ['red', 'green','blue','black','gray','pink','orange','purple'];
    const handleNameChange = (event)=>{
        selectName(event.target.value);
    };
    const handleColorChange = (event)=>{
        selectColor(event.target.value);
    };
    // const renderedNameSelect = 
    return (
        <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', margin:'20px 0'}}>
             <div style={{ paddingRight: '100px'}}>
                <select id="nameDropdown" onChange={handleNameChange} style={{backgroundColor:'gray', color:'white'}}>
                    {/* <option value="">Select component</option> */}
                    {pairs.map((pair) => (
                    <option key={pair.id} value={pair.name}>
                        {pair.name}
                    </option>
                    ))}
                </select>
            </div>
            <div>
                <select id="colorDropdown" onChange={handleColorChange} style={{backgroundColor:'gray', color:'white'}}>
                    <option value="">Select color</option>
                    {colors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                    ))}
                </select>
            </div>
           
        </div>
        

    );
}

export default ControlPanel;