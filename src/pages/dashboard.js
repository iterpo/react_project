import React from "react"

import { Box, Typography,Card, Grid, CardContent, } from '@mui/material'
import {get5courses, getAllStats} from '../utils/calls';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { create } from "@mui/material/styles/createTransitions";
import { Link } from 'react-router-dom';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Cancel from '@mui/icons-material/Cancel';


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

export default function Dashboard() {

  var data = get5courses();
  
  var beneficiaries = 25.000;
  var youth = 45;
  var year_running =10;
  var  women = 10;
  var stats = getAllStats();


  var rows = [];
  function createData(title, online, price, dates, actions) {
    return { title, online, price, dates, actions };
  }

  data.map(d =>(
    rows.push(createData(d.title, d.online, d.price, d.dates, 'http://localhost:3001/courses/'+d.id ))
  ))
  
 

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
    return (
      <div>
      <Box
      sx={{
        maxWidth: setWidth - 10 ,
        height: setHeight/4,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: height *0.003,
        padding: '30px'
      }
    
    }
    >
      <Typography variant="body1" sx={{
        textAlign: "start",
        color: 'primary.black',
        fontSize: 35,
        fontFamily: "Helvetica",
        fontWeight: "bold",
        margin: "0"
      }}>
        Welcome to our Dashboard.
      </Typography>
      <Typography variant="body1" sx={{
        textAlign: "start",
        color: '#a6aac7',
        fontSize: 16,
        fontFamily: "Helvetica",
        fontWeight: "bold",
        margin: "0",
        
      }}>
        Manage everything and have fun!
      </Typography>
    </Box>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
          <CardContent>
              <Typography variant="h5" component="h2">
                Beneficiaries: {' '}
                <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      borderRadius: '20%',
                      backgroundColor: '#3d76da', // replace with your desired color
                      color: '#fff', // replace with your desired color
                      px: 1, // horizontal padding
                      py: '1px', // vertical padding
                    }}
                  >
                    {stats[0]}
                 </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
          <CardContent>
              <Typography variant="h5" component="h2">
                Youth: {' '}
                <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      borderRadius: '20%',
                      backgroundColor: '#3d76da', // replace with your desired color
                      color: '#fff', // replace with your desired color
                      px: 1, // horizontal padding
                      py: '1px', // vertical padding
                    }}
                  >
                    {stats[1]}
                 </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
          <CardContent>
              <Typography variant="h5" component="h2">
                Years Running: {' '}
                <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      borderRadius: '20%',
                      backgroundColor: '#3d76da', // replace with your desired color
                      color: '#fff', // replace with your desired color
                      px: 1, // horizontal padding
                      py: '1px', // vertical padding
                    }}
                  >
                    {stats[2]}
                 </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card >
            <CardContent>
              <Typography variant="h5" component="h2">
                Women: {' '}
                <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      borderRadius: '20%',
                      backgroundColor: '#3d76da', // replace with your desired color
                      color: '#fff', // replace with your desired color
                      px: 1, // horizontal padding
                      py: '1px', // vertical padding
                    }}
                  >
                    {stats[3]}
                 </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    {rows.map((row) => (console.log((row.price))))}
    

    <TableContainer component={Paper}>
      <Table sx={{ marginTop:height *0.003 ,minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center" >Title</StyledTableCell>
            <StyledTableCell align="center">Online</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align ="center" component="th" scope="row">
              {row.title}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.online ? <CheckCircle color="success" /> : <Cancel color="error" />} </StyledTableCell>
              <StyledTableCell align="center">{row.price.normal} </StyledTableCell>
              <StyledTableCell align="center">{row.dates.start_date} - {row.dates.end_date}</StyledTableCell>
              <StyledTableCell align="center"><Link to={row.action} target='_blank' style = {{color:'primary.white'}}>
  <button style={{ backgroundColor: 'blue', fontSize: '18px' }}>View Details</button>
</Link> </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>

    
    )
  }