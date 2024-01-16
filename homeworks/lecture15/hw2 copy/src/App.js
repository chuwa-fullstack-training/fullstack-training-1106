import { useState } from "react";
import ColorComponent from "./component/ColorComponent";
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
function App(){
   
    const [pairs, setPairs] = useState([
        {id: 0, name:'first', color:'white'},
        {id: 1, name:'second', color:'white'},
        {id: 2, name:'third', color:'white'},
        {id: 3, name:'fourth', color:'white'},
        {id: 4, name:'fifth', color:'white'},
        {id: 5, name:'sixth', color:'white'},

    ]);

    

    //change color of the on display color component by selecting from the drop-down button
    const changeColor = (id, newColor)=>{
        const updatedPairs = pairs.map((pair) => {
            if(pair.id === id){
                return {...pair, color:newColor};
            }
            return pair;
        });
        setPairs(updatedPairs);
    };

    //change the name of the on display color component by typing in input bar
    const updateName = (id, newName)=>{
        const updatedPairs = pairs.map((pair) =>{
            if(pair.id === id){
                return {...pair, name: newName};
            }
            return pair;
        });
        setPairs(updatedPairs);
    }

    return (
       
    <div>
        <Routes>
        <Route  path='/' element={<Home name={pairs[0].name} />}/>
         <Route path='/color-component/:name' 
         element={<ColorComponent changeColor={changeColor} updateName={updateName} pairs={pairs} />}/>
        
    </Routes>
    </div>
    );
}

export default App;