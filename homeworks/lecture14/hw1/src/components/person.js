import React, { useEffect, useState } from "react";
import Profile from "./profile";
import './person.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function createData(id, username, image) {
   return { id, username, image };
}

function Person() {
   const [rows, setRows] = useState([]);
   const [selectedPerson, setSelectedPerson] = useState("");

   useEffect(() => {
      const fetchPersons = async () => {
         let data = await axios.get("https://api.github.com/users");
         data = data.data.map((val, ind) =>
            createData(val.id, val.login, val.avatar_url)
         );
         setRows(data);
         setSelectedPerson(data[0].username);
      };
      fetchPersons();
   }, []);

   const handleClick = (row) => {
      setSelectedPerson(row.username);
   }

   return (
      <div className="container">
         <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table sx={{
               width: '280px',
               tableLayout: 'fixed',
            }} aria-label="simple table">

               <TableHead>
                  <TableRow>
                     <TableCell>ID</TableCell>
                     <TableCell align="right">Username</TableCell>
                     <TableCell align="right">Image</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        onClick={() => handleClick(row)}
                     >
                        <TableCell component="th" scope="row">
                           {row.id}
                        </TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">
                           <img src={row.image} alt="description_of_image" className="image" />
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

         <div className="profile">
            <Profile selectedPerson={selectedPerson} />
         </div>
      </div>
   );
}

export default Person;
