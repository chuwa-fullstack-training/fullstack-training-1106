import React, {useState, useEffect} from "react";
import axios from "axios";

const ToDoList = (props) => {
    const [Data, setData] = useState(undfined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try{
                const {todos: todos} = await axios.get(
                    "http://localhost:4000/api/todolists"
                );
                setData(todos);
                setLoading(false);

            }catch(e){
                console.log(e);
            }
        }
    }

    )
}