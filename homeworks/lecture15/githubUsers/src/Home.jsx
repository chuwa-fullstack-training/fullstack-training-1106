import { Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={5}>
      <Typography variant="h2" fontWeight="bold">
        Home
      </Typography>
      {loggedIn ? (
        <Button onClick={handleLogOut}>Log Out</Button>
      ) : (
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
      )}
    </Stack>
  );
};

export default Home;
