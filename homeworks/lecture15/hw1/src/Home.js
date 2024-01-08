import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // 使组件填满视口高度
    fontSize: '2em', // 字体大小
    color: '#333', // 文本颜色
    background: '#f7f7f7', // 背景色
    margin: 0,
    padding: 0
};
const loginButtonStyle = {
    marginTop: '20px',
    padding: '5px 20px',
    fontSize: '0.8em',
    color: 'white',
    background: 'blue',
    border: 'none',
    borderRadius: '5px',
    lineHeight: '40px',
    alignItems: 'center',
    textDecoration: 'none', // 去除下划线
    cursor: 'pointer' // 鼠标悬停时显示指针
};

const logoutButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '0.8em',
    color: 'white',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};
const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '0.8em',
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // 移除链接的下划线
    display: 'inline-block', // 使链接看起来像按钮
    margin: '10px', // 添加一些外边距
};

const Home = () => {
    const { user, logout } = useAuth();
    return (
        <div style={homeStyle}>
            <h1>Home</h1>
            {user ? (
                <>
                    <p>Welcome, {user.username}!</p>
                    <Link to="/users" style={buttonStyle}>Users</Link>
                    <button onClick={logout} style={logoutButtonStyle}>Sign Out</button>
                </>
            ) : (
                <>
                    <p>Welcome to the homepage!</p>
                    <Link to="/login" style={loginButtonStyle}>Login</Link>
                </>
            )}
        </div>
    );
};

export default Home;
