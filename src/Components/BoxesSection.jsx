import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import small_image from '../assets/small_image.png';
import ButtonCustom from './ButtonCustom';



const events = [
  {
    title: 'Il cielo del mese',
    subtitle: 'PLANETARIO DI CASTELNUOVO SCRIVIA',
    image: small_image,
    cardTitle: 'Sabato in Planetario',
  },
  {
    title: 'Momenti di Agri-creatività',
    subtitle: 'ELILU AGRICULTURA FAMILIARE',
    image: small_image,
    cardTitle: 'Momenti di Agri-creatività',
  },
  {
    title: 'Ruota dell\'Anno Celtico',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA E WILD TREK',
    image: small_image,
    cardTitle: 'Ruota dell\'Anno Celtico',
  },
  {
    title: 'Preparazioni',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA ED ELILU',
    image: small_image,
    cardTitle: 'Sabato in Planetario',
  },
  {
    title: 'Preparazioni',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA ED ELILU',
    image: small_image,
    cardTitle: 'Momenti di Agri-creatività',
  },
  {
    title: 'Corso Base di Astronomia',
    subtitle: 'PLANETARIO DI CASTELNUOVO SCRIVIA',
    image: small_image,
    cardTitle: 'Ruota dell\'Anno Celtico',
  },
];

const EventCard = ({ event }) => (

    <Card elevation={0} sx={{ maxWidth: 345, borderRadius:4}}>
    <div className="cardWrapper">
      <CardMedia
        component="img"
        alt="green iguana"
        
        image={event.image}
        sx={{
            borderRadius:4,
            objectFit:'contain'
        }}
      />
      <div className="layer">
           <p>{event.title}</p>
           <p>{event.subtitle}</p>
          </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>

);

const EventCardsSection = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
    <Grid container spacing={3} sx={{marginTop: -10}}>
      {events.map((event, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
      <ButtonCustom>
        Scopri Tutti gli eventi
      </ButtonCustom>
      </div>
  );
};

export default EventCardsSection;