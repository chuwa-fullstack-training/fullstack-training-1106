import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      alert('Login success');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="container w-50">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="username">Username</label>
          <input className='form-control w-50'
          type="text" name="username" id="username" value={username} onChange={handleUsernameChange}/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input className='form-control w-50'
          type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button type="submit" className='mt-3'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
