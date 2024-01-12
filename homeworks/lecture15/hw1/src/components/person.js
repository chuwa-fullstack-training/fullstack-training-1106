import React, { useEffect, useState } from "react";
import './person.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function createData(id, username, image) {
   return { id, username, image };
}

function Person() {
   const navigate = useNavigate();
   const [rows, setRows] = useState([]);

   useEffect(() => {
      const fetchPersons = async () => {
         let data = await axios.get("https://api.github.com/users");
         data = data.data.map((val, ind) =>
            createData(val.id, val.login, val.avatar_url)
         );
         setRows(data);
      };
      fetchPersons();
   }, []);

   const handleClick = (row) => {
      navigate(`/users/${row.username}`);
   }

   return (
      <TableContainer
         component={Paper}
         sx={{
            boxShadow: 'none',
            margin: 'auto', 
            width: 'fit-content' 
         }}
      >
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
   );
}

export default Person;
