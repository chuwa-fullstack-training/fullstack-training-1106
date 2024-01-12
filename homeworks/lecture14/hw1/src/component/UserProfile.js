import axios from "axios";
import { useEffect, useState } from "react";

function UserPorfile({ user }){
    const [detailedUser, setDetailedUser] = useState({});
    const [userRepos, setUserRepos] = useState([]);

    useEffect(()=>{
        axios.get(user.url)
        .then((response) => setDetailedUser(response.data))
        .catch((error)=> console.log("Errors in getting detailed user data from github: ",error));

        axios.get(user.repos_url)
        .then((response) => setUserRepos(response.data))
        .catch((error)=> console.log("Errors in getting detailed user repos from github: ",error));
    }, [user]);

    // const renderedRepos = userRepos.slice(0,3).map((repo) =>{
    //     return(
    //         <div className="bulletline " style={{}}> 
    //             <p style={{color:'rgb(110,170, 255)', listStyleType:'dot'}}>{repo.name}</p> 
    //             <p style={{color:'gray', marginLeft:'20px'}}>{repo.description}</p>
    //          </div>
    //     )
    // });

  if(user)console.log("detailed user: ", user, detailedUser);
    return (
        <div style={{display:'flex', flexDirection:'row', width:'700px', height:'500px', margin:'250px 200px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.8)', borderRadius:'2px'}}>
            <div style={{margin:'40px'}}>
            <img src={user.avatar_url} alt={`avatar of user ${user.login}`} style={{width:'150px', height:'150px', borderRadius:'75px'}}/>
            </div>
            <div>
                <p style={{fontWeight:'bold'}}>{detailedUser.name}</p>
                <p style={{color:'gray'}}> location: {detailedUser.location}</p>
                <p style={{color:'gray'}}>Repositories: </p>
                <div style={{marginLeft:'30px'}}>
                    <ul>
                        {
                            userRepos.slice(0,3).map((repo) =>{
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