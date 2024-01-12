import { useState } from "react";
import ControlPanel from "./ControlPanel";
// import DisplayPanel from "./component/DisplayPanel";
import DisplayBox from "./DisplayBox";
import { useParams } from "react-router-dom";

function ColorComponent({selectColor,pairs, updateName, displayName, setDisplayName, displayId}){
    const { name } = useParams();
    if(name !== displayName){
        setDisplayName(name);
    }
    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
                <ControlPanel selectColor={selectColor} pairs={pairs} displayId={displayId} displayName={displayName}/>
            </div>
            <div>
                <DisplayBox updateName={updateName} pair={pairs[displayId]}/>
            </div>
        </div>
    );
}

export default ColorComponent;