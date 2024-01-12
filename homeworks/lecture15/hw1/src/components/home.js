import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home({ isLoggedIn, setIsLoggedIn, username }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Home
      </Typography>
      {isLoggedIn
        ? <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome, {username}
        </Typography>
        : <Link to="/login"> Login </Link>
      }
      <br />
      {isLoggedIn &&
        <Button
          variant="contained"
          sx={{ width: "300px", marginTop: "30px", alignSelf: "center" }}
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      }
    </>
  );
}
