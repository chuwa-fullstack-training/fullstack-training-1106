import { Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Card(props) {
  const { id, initName, color, setName } = props;

  const [input, setInput] = useState(initName);

  useEffect(() => {
    setName(id, input);
  }, [input]);

  return (
    <Paper elevation={3} 
        sx={{
            height: "200px",
            width: "300px",
            backgroundColor: color,
        }}
        key={id}>
            <Typography variant="h6" sx={{
                color: "black",
                marginLeft: "5%",
            }}>Component name:</Typography>
            <TextField
                defaultValue={initName}
                onChange={(e) => setInput(e.target.value)}
            />
    </Paper>
  );
}