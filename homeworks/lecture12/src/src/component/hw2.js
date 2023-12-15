import React from "react";
import {Grid} from "@mui/material";
const Hw2 = () => {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ border: '1px solid black' }}>
                <h1> Header </h1>
            </Grid>
            <Grid item xs={12} style={{ border: '1px solid black' }}>
                <h2> Nav </h2>    
            </Grid>
            <Grid item xs={3} style={{ border: '1px solid black' }}>
                <h2> Aside </h2>
            </Grid>
            <Grid item xs={9} style={{ border: '1px solid black' }}>
                <h2> Section </h2>
            </Grid>
            <Grid item xs={12} style={{ border: '1px solid black' }}>
                <h2> Footer </h2>
            </Grid>
        </Grid>
    )

};
export default Hw2;