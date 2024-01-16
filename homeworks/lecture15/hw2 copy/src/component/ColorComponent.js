import { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";
// import DisplayPanel from "./component/DisplayPanel";
import DisplayBox from "./DisplayBox";
import { useParams } from "react-router-dom";

function ColorComponent({changeColor, updateName, pairs}){
    const { name } = useParams();
    // const [pair, setPair] = useState(pairs[0]);
    // const [displayName, setDisplayName] = useState('first');
    
    // useEffect(()=>{
    //     for(let p of pairs){
    //         if(p.name === name ){
    //             setPair(p);
    //         }
    //     }
    // },[pairs,isNameChanged ])
    // if(name !== pair.name){
       
    //     for(let p of pairs){
    //         if(p.name === name ){
    //             setPair(p);
    //         }
    //     }
    // }
    let pair = {};
    for(let p of pairs){
                if(p.name === name ){
                    pair = p;
                }
            }

   

    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
                <ControlPanel pairs={pairs} pair={pair} changeColor={changeColor} />
            </div>
            <div>
                <DisplayBox pair={pair} updateName={updateName} />
            </div>
        </div>
    );
}

export default ColorComponent;