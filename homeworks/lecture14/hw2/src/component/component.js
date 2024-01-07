import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import './component.css';

const CustomComponent = ({ component, handleNameChange }) => {
   return (
      <div style={{ backgroundColor: component.backgroundColor }} className="main">
         <p>Component name: </p>
         <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={component.name}
            variant="filled"
            size="small"
            onChange={(event) => handleNameChange(component.id, event.target.value)}
            sx={{ backgroundColor: "white" }}
         />
      </div>
   );
}

export default CustomComponent;