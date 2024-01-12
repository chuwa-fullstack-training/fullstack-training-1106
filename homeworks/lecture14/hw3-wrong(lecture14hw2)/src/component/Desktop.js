import Content from "./Content";
function Desktop({setCurAppId}){
    return (
        <div style={{width:'450px', height:'800px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'white', border: '3px black solid', borderRadius:'50px'}}>
            <div style={{width:'400px', height:'600px',backgroundColor:'#4285F4', border:'2px darkGray solid', borderRadius:'2px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style={{width:'100%', height:'8%', border:'2px beige dashed', fontWeight:'5px', fontSize:'30px', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    status bar
                </div>
                <div style={{width:'100%', height:'92%'}}>
                    <Content setCurAppId={setCurAppId}/>
                </div>
            </div>

        </div>
    )
}

export default Desktop;

// #4285F4