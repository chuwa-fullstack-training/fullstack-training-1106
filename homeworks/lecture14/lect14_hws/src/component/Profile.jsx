import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

// eslint-disable-next-line react/prop-types
const Profile = ({ activeUser }) => {
  const [repo, setRepo] = React.useState(null);
  const [profileData, setProfileDate] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response_prof = await fetch(activeUser.url);
        const data_prof = await response_prof.json();
        const response_resp = await fetch(activeUser.repos_url);
        const data_resp = await response_resp.json();
        const repo_data = data_resp.map((repo) => ({
          repo_name: repo.name,
          description: repo.description,
          repos_url: repo.html_url
        }));
        const prof = {
          image: data_prof.avatar_url,
          name: data_prof.name,
          location: data_prof.location
        };
        setProfileDate(prof);
        setRepo(repo_data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    if (activeUser) {
      fetchData();
    }
  }, [activeUser]);
  console.log("repo:", repo);
  return (
    isLoading ?
      <Card
        sx={{
          p: 2,
          margin: "auto",
          width: 300
        }}
      >
        <Grid container>
          <Grid item xs={2}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={30}
              height={30}
            />
          </Grid>
          <Grid item xs={10}>
            <Skeleton animation="wave" width="35%" />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Skeleton animation="wave" width="70%" />
            <Skeleton animation="wave" width="70%" />
          </Grid>
        </Grid>
      </Card>
      :
      <Card
        sx={{
          p: 2,
          margin: "auto",
          width: 500,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          color: "grey"
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={2}>
            <Avatar
              src={profileData.image}
              sx={{ width: 80, height: 80 }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle1" component="div" gutterBottom
              sx={{ color: "black" }} >
              {profileData.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "20px" }}
            >
              Location: {profileData.location}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Respositories:
            </Typography>
            <ul>
              {repo && repo.slice(0, 3).map(r => (
                <li key={r.repos_url}>
                  <a href={r.repos_url}
                    style={{ color: "#00c4ff", textDecoration: "none" }}>
                    {r.repo_name}
                  </a>
                  <p>{r.description}</p>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Card>
  );
}

export default Profile