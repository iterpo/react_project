import React from "react"
import { useParams,useNavigate  } from 'react-router-dom';

import { Card, CardMedia,Grid, CardContent, Typography,Button,} from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Cancel from '@mui/icons-material/Cancel';
import { getCourse,getResponse} from '../utils/calls';
import axios from "axios";


function handleDelete(id){
    const element = document.querySelector('#delete-request-error-handling .status');
    axios.delete(`http://localhost:3001/courses/${id}`)
    .then(response => element.innerHTML = 'Delete successful')
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error);
    });
    window.location.replace('http://localhost:3000/courses/');

}

 export default function CourseSinglePage() {

    const { id } = useParams(); // Get the id parameter from the URL

    var _data = getCourse(id);
    // const printthisone = _data.dates.start_date

    console.log(_data)


    return (
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={_data.imagePath}
            alt={_data.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {_data.title} ({_data.id})
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {_data.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Price: {_data.price && _data.price.normal} | Online : {_data.online ? <CheckCircle color="success" fontSize='5'/> : <Cancel color="error" fontSize='5' />}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Duration:{_data.duration}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Dates: {_data.dates && _data.dates.start_date} - {_data.dates && _data.dates.end_date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {_data.description}
            </Typography>
            
            <Button color="primary" sx={{ bgcolor: '#ff0000', color: '#fff', marginRight: 10 }} >Edit</Button>
            <Button color="secondary" sx={{ bgcolor: '#00ff00', color: '#fff' }} onClick={() => handleDelete(id)}>Delete</Button>

          </CardContent>
        </Card>
      );
    };



  