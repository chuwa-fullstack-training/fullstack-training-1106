import Desktop from "./component/Desktop";
import { useState } from "react";
function App(){
    const [curAppId, setCurAppId] = useState(1);
    console.log("current app being clicked: ",curAppId);
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
           <Desktop setCurAppId={setCurAppId}/>
           <div style={{width:'300px', height:'200px', border:'2px black solid', fontSize:'20px', margin:'100px 100px', padding:'50px'}}>
           <p>Current App Button is {curAppId}</p>
           </div>
           
        </div>
    )
}

export default App;