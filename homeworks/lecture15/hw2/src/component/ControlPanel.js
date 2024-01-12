import { useNavigate } from "react-router-dom";

function ControlPanel({selectColor, pairs, displayName, displayId}){
    const navigate = useNavigate();
    const colors = [
        {name: 'ice blue', code:'#a0d2eb'},
        {name: 'crown yellow', code:'#fff685'},
        {name: 'orange', code:'#ffb766'},
        {name: 'green', code:'#3d7c47'},
        {name: 'light pink', code:'#fbe3e8'},
        {name: 'purple', code:'#8076a3'},
        {name: 'barbie pink', code:'#e0218a'},
        {name: 'gray', code:'#6B7A8F'},
        {name:'chocolate', code:'#7B3F00'},
        {name:'beige', code:'#DCC7AA'}

    ]
    const handleNameChange = (event)=>{
        navigate(`/color-component/${event.target.value}`)
    };
   
        const handleColorChange = (event)=>{
            selectColor(displayId, event.target.value);
            // navigate(`/color-component/${selectedName}`)
        };
  
    return (
        <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', margin:'20px 0'}}>
             <div style={{ paddingRight: '100px'}}>
                <select id="nameDropdown" value={pairs[displayId].name} onChange={handleNameChange} style={{backgroundColor:'gray', color:'white',  padding:'5px', borderRadius:'3px'}}>
                <option value="">Select box</option>
                    {pairs.map((pair) => (
                    <option key={pair.id} value={pair.name}>
                        {pair.name}
                    </option>
                    ))}
                </select>
            </div>
            <div>
                <select id="colorDropdown" onChange={handleColorChange} style={{backgroundColor:'gray', color:'white', padding:'5px', borderRadius:'3px'}}>
                    <option value="">Select color</option>
                    {colors.map((color) => (
                    <option key={color.name} value={color.code}>
                        {color.name}
                    </option>
                    ))}
                </select>
            </div>
           
        </div>
        

    );
}

export default ControlPanel;