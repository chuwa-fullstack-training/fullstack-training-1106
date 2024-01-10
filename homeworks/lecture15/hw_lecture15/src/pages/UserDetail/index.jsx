import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from "antd";

function Repo(props) {
    const {repo} = props;
  
    return (
      <>
        <p>Repositories:</p>
        <ul>
          {repo.slice(0, 5).map((item, idx) => {
            return <li key={idx}>
                <a href={item.html_url} target="_blank">{item.name}</a>
                <p>{item.description}</p>
              </li>;
          })}
        </ul>
      </>
  
    );
  }
  
  Repo.propTypes = {
    repo: PropTypes.array,
  };

export default function UserDetail (){
    const {login} = useParams();
    const [info, setInfo] = useState({});
    const [userRepo, setRepo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then((res) => res.json())
        .then((data) => {
            setInfo(data)
        })
        .catch((e) => console.log(e));

        fetch(`https://api.github.com/users/${login}/repos`)
        .then((res) => res.json())
        .then((data) => {
            setRepo(data)
        })
        .catch((e) => console.log(e));
    },[])

    return (
    <>
        <img src={info.avatar_url}></img>
        <p>Name: {info.login}</p>
        <p>Location: {info.location}</p>
        <Repo repo={userRepo}></Repo>
        <Button type="primary" onClick={()=>{navigate("/users")}}>Back to Users</Button>
    </>)
}