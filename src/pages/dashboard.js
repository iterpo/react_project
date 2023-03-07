import React from "react"

import { Box, Typography,Card, Grid, CardContent } from '@mui/material';

export default function Dashboard() {
  var beneficiaries = 25.000;
  var youth = 45;
  var year_running =10;
  var  women = 10;
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
    return (
      <div>
      <Box
      sx={{
        maxWidth: width - 10 ,
        height: height/4,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: height *0.01,
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
                    {beneficiaries}
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
                    {youth}%
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
                    {year_running}
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
                    {women}
                 </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>

    
    )
  }