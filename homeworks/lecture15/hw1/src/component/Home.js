import { useNavigate } from 'react-router-dom';

function Home(){
    const login = localStorage.getItem('login');
    let parsedLogin = JSON.parse(login);

    const navigate = useNavigate();
    
    const handleLogout = ()=> {
        localStorage.removeItem('login');
        navigate('/');        
    };

    const handleNavigate = ()=>{
        navigate('/users'); 
    }


   

    if(!login){
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div>
                <p style={{fontSize:'50px', fontWeight:'10px'}}>Home</p>
                </div>
                <div>
                <a href="/login">Login </a>
                </div>            
            </div>
        )
    }else{
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
            <p style={{fontSize:'50px', fontWeight:'10px'}}>Home</p>
            <p style={{fontSize:'40px', fontWeight:'10px'}}>Welcome {parsedLogin.name}</p>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button> 
            </div>            
            <div style={{marginTop:'20px'}}>
                <button onClick={handleNavigate}>Go to user list</button> 
            </div>            
        </div>
        )
    }
    

}

export default Home;