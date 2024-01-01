import {
  Avatar,
  Stack,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack direction="column" alignItems="center" marginBottom={2}>
      <TableContainer component={Paper} sx={{ width: "30%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{idx}</TableCell>
                  <TableCell align="center">
                    <Link to={user.login}>{user.login}</Link>
                  </TableCell>
                  <TableCell align="center">
                    <Avatar
                      src={user.avatar_url}
                      variant="square"
                      sx={{ width: 80, height: 80, marginLeft: 11 }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Users;
