import { useState } from "react";
import { useNavigate} from 'react-router-dom';

function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameInput = (event)=>{
        setName(event.target.value);
    };

    const handlePasswordInput = (event)=>{
        setPassword(event.target.value);
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(!localStorage.getItem('login')){
            const loginData = {name: name, password: password};
            localStorage.setItem('login', JSON.stringify(loginData));
        }
        navigate('/');
    }
    return (
        <div style={{width:'500px', height:'300px', border:'1px black solid', borderRadius:'5px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
                <p style={{fontSize:'40px', fontWeight:'10px'}}>Login</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', marginBottom:'20px'}}>
                <label>Username</label>
                <input onChange={handleNameInput} style={{width:'250px'}} />
            </div>
            <div style={{display:'flex', flexDirection:'column', marginBottom:'20px'}}>
                <label>Password</label>
                <input type='password' onChange={handlePasswordInput} style={{width:'250px'}} />
            </div>
            <div>
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )

}

export default Login;