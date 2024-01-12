import { useState, useEffect } from "react";
import ControlPanel from "./component/ControlPanel";
import DisplayPanel from "./component/DisplayPanel";
import ColorComponent from "./component/ColorComponent";
// import AppRouter from "./component/AppRouter";
import { Routes, Route } from 'react-router-dom';
import Test from './component/Test'
function App(){
   
    const [pairs, setPairs] = useState([
        {id: 0, name:'first', color:'white'},
        {id: 1, name:'second', color:'white'},
        {id: 2, name:'third', color:'white'},
        {id: 3, name:'fourth', color:'white'},
        {id: 4, name:'fifth', color:'white'},
        {id: 5, name:'sixth', color:'white'},

    ]);
    const [displayName, setDisplayName] = useState('first');
    const [displayId, setDisplayId] = useState(0)


    // const selectName = (newName)=>{
    //     setSelectedName(newName);
    // };

    useEffect(()=>{
        for(let p of pairs){
            if(p.name === displayName){
                setDisplayId(p.id);
            }
        }
    },[displayName]);

    const selectColor = (id, newColor)=>{
        const updatedPairs = pairs.map((pair) => {
            if(pair.id === id){
                return {...pair, color:newColor};
            }
            return pair;
        });
        setPairs(updatedPairs);
    };

    const updateName = (id, newName)=>{
        // for(let p of pairs){
        //     if(p.id === id && p.name === selectedName){
        //         setSelectedName(newName);
        //         break;
        //     }
        // }
        const updatedPairs = pairs.map((pair) =>{
            if(pair.id === id){
                return {...pair, name: newName};
            }
            return pair;
        });
        setPairs(updatedPairs);
        
    }

    return (
        // <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        //     <div>
        //         <ControlPanel selectColor={selectColor} selectName={selectName} pairs={pairs}/>
        //     </div>
        //     <div>
        //         <DisplayPanel updateName={updateName} pairs={pairs}/>
        //     </div>
        // </div>
       
       
    //    <div>
    //         <AppRouter selectColor={selectColor} selectName={selectName} updateName={updateName}  pairs={pairs} selectedName={selectedName}/>
    //         {/* <ColorComponent selectColor={selectColor} selectName={selectName} updateName={updateName}  pairs={pairs}/> */}
    //     </div>

    <div>
        <Routes>
        <Route  path='/' element={<Test />}/>
        {/* <Route path='/color-component/:name' element={<ColorComponent selectColor={selectColor} selectName={selectName} updateName={updateName}  pairs={pairs} selectedName={selectedName} setSelectedName={setSelectedName}/>}/> */}
         <Route path='/color-component/:name' 
         element={<ColorComponent selectColor={selectColor}  updateName={updateName}  pairs={pairs} displayName={displayName} setDisplayName={setDisplayName} displayId={displayId}/>}/>
        
    </Routes>
    </div>
    );
}

export default App;