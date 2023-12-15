import React, { useState } from "react";
import {Grid, TextField} from "@mui/material";
const Hw4 = () => {
    const [value, setValue] = useState(3);
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    const numberToOrdinal = (num) => {
        if (isNaN(num) || num === 0) {
            return num;
        }

        const lastDigit = num % 10;
        const lastTwoDigits = num % 100;

        if (lastDigit === 1 && lastTwoDigits !== 11) {
            return num + 'st';
        }
        if (lastDigit === 2 && lastTwoDigits !== 12) {
            return num + 'nd';
        }
        if (lastDigit === 3 && lastTwoDigits !== 13) {
            return num + 'rd';
        }
        return num + 'th';
    }
    return(
        <Grid container spacing={3}>
            <Grid item xs={9} style={{ border: '1px solid black' }}>
                <TextField type="number" fullWidth onChange={handleInputChange}
                defaultValue={value}
                />
            </Grid>
            <Grid item xs={3} style={{ border: '1px solid black' }}> 
                <h1>{numberToOrdinal(parseInt(value))}</h1>
            </Grid>
        </Grid>
    )

};
export default Hw4;