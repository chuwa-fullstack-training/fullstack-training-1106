import React, {useState} from 'react'
import "./food.css";
import FoodItem from './FoodItem';
const Food = () => {
    const [foodItem, setFoodItem] = useState({name: '', price: '', origin: ''})
    const [food, setFood] = useState([]);     
    const [editIndex, setEditIndex] = useState(null);
    const addFood = () => {
      setFood((prev)=> [
        ...prev,
        foodItem
      ]
      );
      setFoodItem({name: '', price: '', origin: ''})
    }
    const deleteFood = (indexToDelete) => {
      setFood((prev)=> prev.filter((_, index)=> index!== indexToDelete))
     
    }
    const updateFood = () => {
      setFood((prev)=> prev.map((item, index)=> (index === editIndex ? foodItem: item)));
      setFoodItem({name: '', price: '', origin: ''})
      setEditIndex(null);
    }
    const editFood = (index) => {
      setFoodItem(food[index]);
      setEditIndex(index);
      console.log("edit -----")
    }
  return (
    <>
    <div className="market-container">
      <div className='title-box'>
       <div className="title">Food market</div> 
       <button className="save">Save</button>

      </div>  
      <div className="content-container">
     {food.map((item, index)=> (
        <div key={index}  onClick={()=>editFood(index)}>
       <FoodItem foodItem={item} deleteFood={(e)=>{
        e.stopPropagation();
        deleteFood(index)}
       }/>
       </div>
    ))}
      </div>
    <div className='input-group'>
      <div className='input-row'>
        <div className='subtitle'>Name</div>
      <input
          type="text"  
          name = "name"  
          value={foodItem.name}
          className="form-control input-form"
          onChange={(e)=> setFoodItem({...foodItem, name: e.target.value})}
          />
          </div>
          <div className='input-row'>
        <div className='subtitle'>Price</div>
           <input
          type="number"    
          value={foodItem.price}
          className="form-control input-form"
          onChange={(e)=> setFoodItem({...foodItem, price: e.target.value})}
          />
          
          </div>
          <div className='input-row'>
        <div className='subtitle'>Origin</div>
      <input
          type="text"    
          value={foodItem.origin}
          className="form-control input-form"
          onChange={(e)=> setFoodItem({...foodItem, origin: e.target.value})}
          />
       
          </div>
         
    <button className="add" onClick={editIndex !== null? updateFood: addFood}>
      {editIndex!== null ? "Update" : "Add"}</button>
    </div>
    </div>
  </>
  )
}

export default Food