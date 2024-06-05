import React, {useState, useEffect} from "react";
import axios from "axios";
import "./like.css";

const Practice = () => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);
    const [searchId, setSearchId] = useState(1);
    const [error, setError] = useState(false);   
    
const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
    console.log(response.data);
}

const searchUser = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(response.data);

    console.log(response.data);
}
    useEffect(() => {
        fetchUsers();
    }, []);


   const handleSubmit = () => {
    if(!firstName.trim() || !lastName.trim()|| !email.trim()){
        setError(true);
    }
    else{
        console.log(firstName, lastName, email);
    }
}

    return (
        <div>
        <input type = "text" className={error ? "error" : ""}
        value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" className={error ? "error" : ""} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
         
            <input type="text" className={error ? "error" : ""}
            
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        
            <button onClick={()=> searchUser(searchId)}>Search</button>
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
  
        </div>
    );
}

export default Practice;