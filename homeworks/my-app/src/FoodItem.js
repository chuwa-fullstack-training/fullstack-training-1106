import React from 'react'
import "./food.css"

const FoodItem = ({foodItem, deleteFood}) => {
  const {name, price, origin} = foodItem;
 
  return (
    <div className="food-container">
        <div className="delete-icon"
        onClick={deleteFood}>delete icon</div>
       <div className="content">
      <div >name:{name}</div>
    <div> price:{price}</div>
     <div> origin:{origin}</div>
    
       </div>
       </div>
  )
}

export default FoodItem