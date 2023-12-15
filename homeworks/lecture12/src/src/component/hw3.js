import React, { useState } from "react";
import {Button, ButtonGroup, Grid} from "@mui/material";
const Hw3 = () => {
    const [sum, setSum] = useState(0);
    const addValue = (value) => {
        setSum(sum + value);
    }
    const resetValue = () => {
        setSum(0);
    }
    return(
        <Grid container spacing={3}>
            <Grid item xs={9} >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => addValue(1)}>+1</Button>
                    <Button onClick={() => addValue(10)}>+10</Button>
                    <Button onClick={() => addValue(100)}>+100</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={() => resetValue()}>
                    Rest Number
                </Button>
            </Grid>
            <Grid item xs={12}>
                <h2> {sum} </h2>    
            </Grid>
        </Grid>
    )

};
export default Hw3;