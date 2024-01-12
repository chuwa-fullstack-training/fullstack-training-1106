import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 


function UserPorfile(){
    const [detailedUser, setDetailedUser] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const { login } = useParams();
    console.log("debug username: ", login);
    const username = login;

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${username}`)
        .then((response) => setDetailedUser(response.data))
        .catch((error)=> console.log("Errors in getting detailed user data from github: ",error));

        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => setUserRepos(response.data))
        .catch((error)=> console.log("Errors in getting detailed user repos from github: ",error));
    }, [username]);

    // const renderedRepos = userRepos.slice(0,3).map((repo) =>{
    //     return(
    //         <div className="bulletline " style={{}}> 
    //             <p style={{color:'rgb(110,170, 255)', listStyleType:'dot'}}>{repo.name}</p> 
    //             <p style={{color:'gray', marginLeft:'20px'}}>{repo.description}</p>
    //          </div>
    //     )
    // });

//   if(user)console.log("detailed user: ", user, detailedUser);
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'600px', margin:'0', padding:'0 20px', border:'1px solid', overflowY:'scroll'}}>
            <div style={{margin:'40px'}}>
            <img src={detailedUser.avatar_url} alt={`avatar of user ${username}`} style={{width:'300px', height:'300px'}}/>
            </div>
            <div>
                <p style={{fontWeight:'bold'}}>{detailedUser.name}</p>
                <p style={{color:'gray'}}> location: {detailedUser.location}</p>
                <p style={{color:'gray'}}>Repositories: </p>
                <div style={{marginLeft:'30px'}}>
                    <ul>
                        {
                            userRepos.map((repo) =>{
                                return <li>
                                    <p style={{color:'rgb(110,170, 255)', listStyleType:'dot'}}>{repo.name}</p> 
                                    <p style={{color:'gray', marginLeft:'20px'}}>{repo.description}</p> 
                                    </li>
                            })
                       }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default UserPorfile;