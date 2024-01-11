import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Home({ isLogin, logout, username }) {
    return <div style={{ textAlign: "center" }}>
        <h1>Home</h1>
        {isLogin ?
            <>
                <h2>Welcome {username}</h2>
                <button onClick={logout}>Log out</button>
            </>
            :
            <Link to='/login' style={{ textDecoration: 'none', color: "blue" }}>login</Link>
        }
    </div>
}
export default Home