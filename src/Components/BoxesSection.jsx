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
    bgcolor: 'rgba(16, 35, 78, 0.8)'
  },
  {
    title: 'Momenti di Agri-creatività',
    subtitle: 'ELILU AGRICULTURA FAMILIARE',
    image: small_image,
    cardTitle: 'Momenti di Agri-creatività',
    bgcolor: 'rgba(236, 136, 74, 0.8)'
  },
  {
    title: 'Ruota dell\'Anno Celtico',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA E WILD TREK',
    image: small_image,
    cardTitle: 'Ruota dell\'Anno Celtico',
    bgcolor: 'rgba(179, 79, 38, 0.8)'
  },
  {
    title: 'Preparazioni',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA ED ELILU',
    image: small_image,
    cardTitle: 'Sabato in Planetario',
    bgcolor: 'rgba(164, 140, 101, 0.8)'
  },
  {
    title: 'Preparazioni',
    subtitle: 'AGRITURISMO MANGIA\' AD CAMPAGNA ED ELILU',
    image: small_image,
    cardTitle: 'Momenti di Agri-creatività',
    bgcolor: 'rgba(164, 140, 101, 0.8)'
  },
  {
    title: 'Ruota dell\'Anno Celtico',
    subtitle: 'PLANETARIO DI CASTELNUOVO SCRIVIA',
    image: small_image,
    cardTitle: 'Ruota dell\'Anno Celtico',
    bgcolor: 'rgba(55, 21, 54, 0.8)'
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
      <div style={{backgroundColor: event.bgcolor }} className="layer">
           <Typography color={'white'}  variant='caption' fontSize={23} textAlign={'center'}>{event.title}</Typography>
           <Typography color={'white'} fontSize={10} textAlign={'center'}>{event.subtitle}</Typography>
          </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        L’azienda è certificata biologica ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.
        </Typography>
      </CardContent>
    </Card>

);

const EventCardsSection = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
    <Grid container spacing={3} sx={{marginTop: -15, marginBottom:5}}>
      {events.map((event, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
      <ButtonCustom>
        Scopri tutti gli eventi
      </ButtonCustom>
      </div>
  );
};

export default EventCardsSection;