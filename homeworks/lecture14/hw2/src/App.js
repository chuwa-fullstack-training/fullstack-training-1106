import { useState } from "react";
import ControlPanel from "./component/ControlPanel";
import DisplayPanel from "./component/DisplayPanel";
function App(){
    // const [name, setName] = useState('');
    // const [color, setColor] = useState('');
    const [pairs, setPairs] = useState([
        {id: 1, name:'first', color:'white'},
        {id: 2, name:'second', color:'white'},
        {id: 3, name:'third', color:'white'},
        {id: 4, name:'fourth', color:'white'},
        {id: 5, name:'fifth', color:'white'},
        {id: 6, name:'sixth', color:'white'},

    ]);
    const [selectedName, setSelectedName] = useState('first');
    // const colors = ['red', 'green','blue','black','white','pink','orange','purple'];


    const selectName = (newName)=>{
        setSelectedName(newName);
    };

    const selectColor = (newColor)=>{
        const updatedPairs = pairs.map((pair) => {
            if(pair.name === selectedName){
                return {...pair, color:newColor};
            }
            return pair;
        });
        setPairs(updatedPairs);
    };

    const updateName = (id, newName)=>{
        for(let p of pairs){
            if(p.id === id && p.name === selectedName){
                setSelectedName(newName);
                break;
            }
        }
        const updatedPairs = pairs.map((pair) =>{
            if(pair.id === id){
                return {...pair, name: newName};
            }
            return pair;
        });
        setPairs(updatedPairs);
        
    }

    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
                <ControlPanel selectColor={selectColor} selectName={selectName} pairs={pairs}/>
            </div>
            <div>
                <DisplayPanel updateName={updateName} pairs={pairs}/>
            </div>
        </div>
    );
}

export default App;