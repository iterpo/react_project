import React from 'react';
import CustomCard from './card_';
import {  Grid } from '@mui/material'


const CardSet = ({data}) => {
    return (
        <Grid container spacing={3}>
        {data.map((el)=>(console.log(el.dates.start_date)))};
          {data.map((cardData) => (
            <Grid item key={cardData.id} xs={12} sm={6} md={4} lg={3}>
              <CustomCard
                title={cardData.title}
                imageSrc={cardData.imagePath}
                info1={cardData.price.normal}
                info1_5 ={cardData.online}
                info2={cardData.dates.start_date}
                info3={cardData.dates.end_date}
                info4 = {cardData.duration}
                buttonLink={cardData.actions}
              />
            </Grid>
          ))}
        </Grid>
      );
    };

export default CardSet;