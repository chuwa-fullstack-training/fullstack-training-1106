import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './person.css';
import { Octokit, App } from "octokit";

const Profile = ({ selectedPerson = "mojombo" }) => {
   const [user, setUser] = useState({});
   const [repo, setRepo] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      console.log(selectedPerson);
      const octokit = new Octokit({
         auth: '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'
      })

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
               res = res.data.slice(0, 3);
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
      <Box sx={{ minWidth: 275, marginLeft: "100px", marginTop: "140px" }}>
         <Card variant="outlined">
            <CardContent sx={{ display: "flex", flexDirection: "row" }}>
               {isLoading ? (
                  <Skeleton variant="circular" width={80} height={80} /> // For Avatar
               ) : (
                  <Avatar aria-label="recipe" src={user.avatar} className="large-avatar">User</Avatar>
               )}
               <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "30px" }}>
                  {isLoading ? (
                     <React.Fragment>
                        <Skeleton variant="text" width={210} height={24} />
                        <Skeleton variant="text" width={210} height={20} />
                        <Skeleton variant="text" width={210} height={20} style={{ marginTop: '20px' }} />
                        {Array.from(new Array(3)).map((_, index) => (
                           <Skeleton key={index} variant="text" width={210} height={20} />
                        ))}
                     </React.Fragment>
                  ) : (
                     <React.Fragment>
                        <Typography sx={{ fontSize: 17 }}>
                           {user.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                           Location: {user.location}
                        </Typography>
                        <Typography sx={{ fontSize: 14, paddingTop: "20px" }}>
                           Repositories:
                        </Typography>
                        <List>
                           {repo.map((item, index) => (
                              <ListItem key={index} sx={{ paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 }}>
                                 <ListItemText
                                    primary={`• ${item.name}`}
                                    primaryTypographyProps={{ style: { fontSize: '13px', color: "blue" } }}
                                    secondary={
                                       <Typography sx={{ display: 'inline', fontSize: "10px" }} component="span" color="text.primary">
                                          {item.description}
                                       </Typography>
                                    }
                                 />
                              </ListItem>
                           ))}
                        </List>
                     </React.Fragment>
                  )}
               </Box>
            </CardContent>
         </Card>
      </Box>
   );
}

export default Profile;