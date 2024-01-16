 import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
 function Home({name}){
    const navigate = useNavigate();
    
    useEffect(()=>{
        navigate(`/color-component/${name}`);
    }, [name, navigate]);

    return null;
}

export default Home;