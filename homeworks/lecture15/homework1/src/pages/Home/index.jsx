import { Link } from "react-router-dom"
const Home = (props) => {
    const handleClick = () => {
        props.setUser(undefined);
    }
    return(
        <>
        <p>Home</p>
      {props.user? <button onClick={handleClick}>logout</button> : <Link to='/login'> login</Link> }
        </>
    )
}

export default Home;