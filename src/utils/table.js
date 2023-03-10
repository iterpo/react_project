import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Cancel from '@mui/icons-material/Cancel';
import React from "react"

import { get5courses } from './calls';
import { useEffect, useState } from 'react';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
  
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



  export function CreateTable() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(5);
  
    var rows = [];
    function createData(title, online, price, dates, actions) {
      return { title, online, price, dates, actions };
    }
  
    useEffect(() => {
      async function fetchCourses() {
        try {
          const data = await get5courses();
          data.map((d) =>
            rows.push(
              createData(d.title, d.online, d.price, d.dates, "http://localhost:3001/courses/" + d.id)
            )
          );
          setCourses(rows);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchCourses();
    }, []);
  
    function showAllCourses() {
      setLimit(null);
    }
  
    if (loading) return <p>Loading courses...</p>;
    if (error) return <p>Error loading courses: {error.message}</p>;
  
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ marginTop: 1, minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Online</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.slice(0, limit).map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.online ? <CheckCircle color="success" /> : <Cancel color="error" />}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.price.normal} </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.dates.start_date} - {row.dates.end_date}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={row.action} target="_blank" style={{ color: "primary.white" }}>
                      <button style={{ backgroundColor: "blue", fontSize: "18px" }}>View Details</button>
                    </Link>{" "}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {limit && (
          <button onClick={showAllCourses} style={{ marginTop: "10px" }}>
            Show All Courses
          </button>
        )}
      </>
    );
  }