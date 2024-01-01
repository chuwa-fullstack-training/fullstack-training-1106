import { Box, Stack, Typography, List, ListItem } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { login } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
        return fetch(data.repos_url);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserRepos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(userInfo, userRepos);

  return (
    <>
      <Stack direction="column" spacing={3} padding={2}>
        <Box>
          <img
            src={userInfo.avatar_url}
            alt={userInfo.login}
            style={{ width: "400px", height: "400px" }}
          />
          <Typography>Name: {userInfo.name}</Typography>
        </Box>

        <Typography>Location: {userInfo.location}</Typography>

        <Typography>Repositories:</Typography>

        <List
          sx={{
            marginLeft: "50px !important",
            width: "400px",
            maxHeight: "400px",
            overflow: "auto",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          {userRepos.map((repo) => {
            return (
              <ListItem key={repo.id}>
                <Stack direction="column">
                <a href={repo.html_url}>{repo.name}</a>
                <Typography component="p">{repo.description}</Typography>
                </Stack>
              </ListItem>
            );
          })}
        </List>
        <Link to="/users">Back to users</Link>
      </Stack>
    </>
  );
};

export default UserDetail;
