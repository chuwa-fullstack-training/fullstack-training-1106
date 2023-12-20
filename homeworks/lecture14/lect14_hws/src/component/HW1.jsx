import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import '../css/hw1.css'
import Profile from './Profile'

const BasicTable = ({ getActiveUser }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        const simplifiedData = data.map((user) => ({
          username: user.login,
          id: user.id,
          image: user.avatar_url,
          repos_url: user.repos_url,
          url: user.url
        }));
        setData(simplifiedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Image</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map((row) => (
            <TableRow
              key={row.repos_url}
              onClick={() => getActiveUser(row)}
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>
                <Avatar src={row.image} variant="square" sx={{ width: 56, height: 56 }} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
function HW1() {
  const [activeUser, setActiveUser] = React.useState(null);
  const getActiveUser = (user) => {
    setActiveUser(user);
  }
  return (
    <div className="container">
      <div className="left">
        <BasicTable getActiveUser={getActiveUser} />
      </div>
      <div className="right">
        {activeUser && <Profile activeUser={activeUser} />}
      </div>
    </div>
  )
}
export default HW1