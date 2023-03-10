import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

import CheckCircle from '@mui/icons-material/CheckCircle';
import Cancel from '@mui/icons-material/Cancel';
import { fontSize } from '@mui/system';

const CustomCard = ({title, imageSrc, description, info1,info1_5, info2,info3,info4, buttonLink}) => {
    return (
        <Card>
          <CardMedia
            component="img"
            height="180"
            image={imageSrc}
            alt={title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Price:{info1} | Online : {info1_5 ? <CheckCircle color="success" fontSize='5'/> : <Cancel color="error" fontSize='5' />}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Duration:{info4}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Dates:{info2} - {info3}
            </Typography>
            <Button variant="contained"  color="primary" href={buttonLink} sx={{marginTop: 2, fontSize: 12}}>
              View
            </Button>
          </CardContent>
        </Card>
      );
    };
  
  export default CustomCard;