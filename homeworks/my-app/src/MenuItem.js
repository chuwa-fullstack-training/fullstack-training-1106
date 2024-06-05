import React, {useState, useEffect} from "react";
import axios from "axios";

const MenuItem =(short_name)=>{
    const [menuItem, setMenuItem] = useState([]);
    const fetchMenuItem = async (short_name) => {
        try{
            const response = await axios.get("http://stream-restaurant-menu-svc.herokuapp.com/item?category="+short_name);
            console.log(response.data);
            setMenuItem(response.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchMenuItem(short_name);
    },[]);

}

export default MenuItem;