import axios from "axios";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import './style.css';

function UserList(){
    const [users, setUsers] = useState([]);
    const [userOnShow, setUserOnShow] = useState({});

    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then((response) => {setUsers(response.data); setUserOnShow(response && response.data[0])})
        .catch((error)=> console.log("Errors in getting data from github: ",error));
    }, []);
    // console.log("outter id is; ",users[0].id);
    const handleClick = (user)=>{
        if(user){
            setUserOnShow(user);
        }
    };
     

    const renderedUserList = users.map((user) => {
        return (
            <div className='userListLine' key={user.id} onClick={() => handleClick(user)}>
            <p style={{width:'20px', marginRight:'100px'}}> {user.id} </p>
            <p style={{width:'50px', marginRight:'100px'}}> {user.login} </p>
            <img src={user.avatar_url} alt={`avatar of user ${user.login}`} style={{width:'100px', height:'100px'}}/>
        </div>
        )
    });

    const userListHeader = (
        <div className='userListLine'>
        <p style={{width:'20px', marginRight:'100px'}}> ID </p>
        <p style={{width:'50px', marginRight:'100px'}}> Username </p>
        <p style={{width:'50px', marginRight:'100px'}}> Image </p>
    </div>
    );

    // setUserIdOnShow(users[1].id);
    return (
        
        <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
           <div style={{width:'400px'}}>
            {userListHeader}
            {renderedUserList}
           </div>
           <div style={{}}>
                <UserProfile user={userOnShow}  />
           </div>
        </div>
    )

}

export default UserList;