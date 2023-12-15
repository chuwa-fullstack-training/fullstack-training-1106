import React, {useState} from 'react';
import { Box, Paper, Grid, Button } from "@mui/material";

const SmartphoneScreen = () => {
  const [msg, setMsg] = useState("");
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop={"50px"}>
      <Paper style={{ maxWidth: 300, borderRadius: 20, padding: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           <Box display="flex" justifyContent="center" alignItems="center"
                border={1} 
                borderColor="grey.500"
                borderStyle="dashed"
           >
            <h1> {msg} </h1>
           </Box>
          </Grid>
          {Array.from({ length: 15 }).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Button variant="outlined" 
              onClick={() => setMsg(msg + (index + 1))}
              fullWidth>
                {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default SmartphoneScreen;
