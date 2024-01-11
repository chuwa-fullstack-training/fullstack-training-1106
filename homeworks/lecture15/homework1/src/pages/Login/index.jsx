import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName === 'chuwa' && password === '123456'){
            props.setUser('chuwa');
            navigate('/');
        }else{
            alert('Incorrect username or password!');
        }

    }
    return(
        <>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='userName'> username:</label>
                <input 
                    type='text'
                    id='userName'
                    onChange={e => setUserName(e.target.value)}
                    ></input>
                <div>
                <label htmlFor='password'> password:</label>
                <input
                    type='text'
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                ></input>
                </div>
                <button type="submit"> login </button>
            </form>
        </>
    )
}

export default Login;