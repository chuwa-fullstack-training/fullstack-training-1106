import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn, setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === "username" && password === "password") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setUser(username);
      localStorage.setItem("username", username);
      navigate(-1);
    } else {
      alert("username or password is wrong!");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          margin: "auto",
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            marginTop: "40px",
            paddingLeft: "7px",
          }}
        >
          Username
        </Typography>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            marginTop: "20px",
            paddingLeft: "7px",
          }}
        >
          Password
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "300px", marginTop: "30px", alignSelf: "center" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
