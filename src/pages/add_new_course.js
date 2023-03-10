import React from "react" 
import { useState } from "react";
import { Card,Button, CardContent, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, TextField, Typography } from "@mui/material";



export default function AddCourseForm() {

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [earlyBirdPrice, setEarlyBirdPrice] = useState(0);
  const [normalPrice, setNormalPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can submit the form data to your server or perform any other action here.
    const formData = {
      title,
      imagePath,
      price: {
        early_bird: earlyBirdPrice,
        normal: normalPrice
      },
      dates: {
        start_date: startDate,
        end_date: endDate
      },
      duration,
      online: isOnline,
      description
    };

    console.log(formData)

    fetch('http://localhost:3001/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Course added successfully');
        // You can redirect the user to another page or do something else here
      } else {
        console.log('Error adding course');
      }
    })
    .catch(error => console.error('Error posting course:', error));
  };


  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Typography variant="h5" >
            Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Title" fullWidth value={title} onChange={(event) => setTitle(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Duration" fullWidth value={duration} onChange={(event) => setDuration(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Image Path" fullWidth value={imagePath} onChange={(event) => setImagePath(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox checked={isOnline} onChange={(event) => setIsOnline(event.target.checked)} />} label="Online" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" fullWidth multiline value={description} onChange={(event) => setDescription(event.target.value)} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5">
            Dates
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Start Date" fullWidth value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="End Date" fullWidth value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" >
            Price
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth >
                <InputLabel htmlFor="earlyBirdPrice">Early Bird</InputLabel>
                <TextField id="earlyBirdPrice" type="number" inputProps={{ min: 0 }} value={earlyBirdPrice} onChange={(event) => setEarlyBirdPrice(event.target.value)} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth >
            <InputLabel htmlFor="normalPrice">Normal Price</InputLabel>
            <TextField id="normalPrice" type="number" inputProps={{ min: 0 }} value={normalPrice} onChange={(event) => setNormalPrice(event.target.value)} />
          </FormControl>
        </Grid>
      </Grid>
    </CardContent>
  </Card>

  <Button type="submit" variant="contained"  color="primary" sx={{marginTop: 2, fontSize: 12}}>
              Submit
            </Button>
</form>);}