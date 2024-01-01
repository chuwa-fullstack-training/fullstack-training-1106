import { Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ status: "logged in!" }));
    navigate(from);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={5}>
      <Typography variant="h2" fontWeight="bold">
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack direction="column" alignItems="center" spacing={3}>
          <TextField id="username" label="Username" variant="outlined" />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
