import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import './person.css';
import { Octokit, App } from "octokit";
import { useParams, Link as RouterLink } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  const selectedPerson = name || "mojombo";

  const [user, setUser] = useState({});
  const [repo, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(selectedPerson);
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN
    });

    const fetchInformation = async () => {
      setIsLoading(true);
      try {
        if (selectedPerson !== null || selectedPerson !== undefined || selectedPerson !== "") {
          let res = await octokit.request(`GET /users/${selectedPerson}`, {
            username: selectedPerson,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
          setUser({ avatar: res.data.avatar_url, name: res.data.name, location: res.data.location });

          res = await octokit.request(`GET /users/${selectedPerson}/repos`, {
            username: selectedPerson,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
          res = res.data;
          // store it into repo
          setRepo(res.map((val) => ({ name: val.name, description: val.description })));
        }
      } catch (err) {
        console.log("error: ", err);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchInformation();
  }, [selectedPerson]);

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start" spacing={2}>
          <Grid item>
            <Avatar
              src={user.avatar}
              alt={user.name}
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '10%'
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Name: {user.name}</Typography>
            <Typography variant="body1" align="left">Location: {user.location}</Typography>
            <Typography variant="body1" align="left" paddingTop={"30px"}>Repositories:</Typography>
          </Grid>
          {repo.map((repository, index) => (
            <Grid item key={index} style={{ paddingLeft: "10px" }}>
              <Typography variant="body2" align="left" paddingLeft={"20px"}>
                <Link href={repository.html_url} style={{ textDecoration: 'underline', color: 'blue' }}>
                  {repository.name}
                </Link>
              </Typography>
              <Typography variant="body2" align="left" paddingLeft={"20px"}>
                {repository.description}
              </Typography>
            </Grid>
          ))}
          <Grid item style={{ paddingTop: "10px" }}>
            <RouterLink to="/users" style={{ textDecoration: 'none', color: 'blue' }}>Back to users</RouterLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Profile;