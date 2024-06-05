import axios from 'axios';
const USER_API = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    try{
    const response = await axios.get(USER_API);
    return response.data;
}   catch (error) { 
    return error.response.data;
   
}

}

export const getUserById = async (id) => { 
    try {
        const response = await axios.get(`${USER_API}/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

