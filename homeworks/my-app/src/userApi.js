import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserThunk, fetchUserByIdThunk} from "./UserThunk";


const UserApi = () => {
    const users = useSelector(state => state.user.users);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const fetchUser = (id) => dispatch(fetchUserByIdThunk(id));
    useEffect(() => {
        dispatch(fetchUserThunk());
        console.log("fetch", users);
    }, []);

    return (
        <div>
          <ul>
            {users.map((u)=> (
                <div>
                <li key={u.id}>{u.name}
                 <button onClick={() => fetchUser(u.id)}>Get User</button>
                 {user.id && (
                        <div>
                            <p>{u.name}</p>
                            <p>{u.email}</p>
                        </div>
                 )
                    }
                </li>
                </div>
            
            ))}
          </ul>
        </div>
    )
}

export default UserApi;