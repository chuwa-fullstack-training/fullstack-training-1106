import React, {useState, useEffect} from "react";
import axios from "axios";
import "./menu.css";
const Menu = ()=>{
    const [catagory, setCatagory] = useState([]);
    const [selectedCatagory, setSelectedCatagory] = useState(null);
    const [shortName, setShortName] = useState("");


    const fetchCatagory = async () => {
        try{
            const response = await fetch("https://stream-restaurant-menu-svc.herokuapp.com/category");
            const data = await response.json();
            setCatagory(data);
          
        }catch(error){
            console.log(error);
        }
    }

    const fetchMenuItem = async (short_name) => {
        try{
            const response = await fetch("https://stream-restaurant-menu-svc.herokuapp.com/item?category="+short_name);
            const data = await response.json();
            setSelectedCatagory(data);
        }catch(error){
            console.log(error);
        }
    }
  
    useEffect(()=>{
        fetchCatagory();
    },[]);

    const handleClick = (catagory) => {
        setShortName(catagory.short_name);
        fetchMenuItem(catagory.short_name);
    };
    return (

        <div className="menu-container">
            <div >
                <h4>Menu Catagory</h4>
                <ul className="menu-list">
                    {catagory.map((catagory) => (
                        <li className="menu-item" key={catagory.short_name} onClick={() => handleClick(catagory) }>
                            {catagory.name} - ({catagory.short_name})
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                
                    {selectedCatagory && (

                    <>
                    <h4 className="title">Items in Catagory: ({shortName})</h4>
                    <table className="menu-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCatagory.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </>
                    )}
              
            </div>
        </div>
  
    );
}
export default Menu;