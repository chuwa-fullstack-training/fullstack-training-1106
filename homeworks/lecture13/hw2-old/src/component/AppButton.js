
function AppButton({ id, setCurAppId}){
    const handleClick = ()=>{
        setCurAppId(id);
    }
    return (
        <div onClick={handleClick} style={{width:'75px', height:'75px', border:'1px gray solid', backgroundColor:'white', borderRadius:'10px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'50px', fontWeight:'50px', margin:'18px 7px'}}>
           {id}
        </div>
    )
}

export default AppButton;