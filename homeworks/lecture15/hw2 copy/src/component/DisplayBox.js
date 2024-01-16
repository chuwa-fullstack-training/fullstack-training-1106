import {  useNavigate } from "react-router-dom";

function DisplayBox({pair, updateName}){
    const navigate = useNavigate();

    const handleChange = (event)=>{
        updateName(pair.id, event.target.value);
        navigate(`/color-component/${event.target.value}`);
    }
    return (
        <div style={{height:'120px', width:'200px', background:pair.color, border:'1px gray solid', padding:'5px' }}>
            <p>Component name: </p>
            <input value={pair.name} onChange={handleChange} style={{width:'150px', margin:'20px'}}/>

        </div>
    );
}

export default DisplayBox;