import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

import planetario from '../assets/planetario.png';
import sfondo_verde from '../assets/sfondo_verde.png';
import ButtonCustom from './ButtonCustom';



const PlanetarioSection = () => {
  return (
    <Box
      sx={{
        display:'flex',
        backgroundColor: '#216545',
        marginTop:5,
        paddingY:10,
        backgroundImage: `url(${sfondo_verde})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height:'55vh',
        alignItems:'center'
      }}
      
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                '& img': {
                  width: '80%',
                  height: '100%',
                  display: 'block',
                  borderRadius:'16px',
                  marginLeft:10
                },
              }}
            >
              <img src={planetario} alt="Il Planetario" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'white' }}>
              Il Planetario
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'white' }}>
              Finalmente il nostro planetario vi potrà accogliere anche nei
              mesi invernali. Ci aspettano una serie di appuntamenti
              pomeridiani -sabato pomeriggio -per scoprire i segreti del
              cielo e una serie di appuntamenti speciali dedicati alla Ruota
              dell'Anno Celtico.
            </Typography>
            <ButtonCustom>
              Visita il planetario
            </ButtonCustom>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlanetarioSection;