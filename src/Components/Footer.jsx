import React from 'react';
import { Box, Container, Grid, Typography, Divider, Stack } from '@mui/material';


import UE_image from '../assets/UE_image.png';
import Frame from '../assets/Frame.png'; 


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1E5D3F', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container sx={{flexDirection:'column'}}>
          <Grid item>
          <img src={Frame} alt="Soul Farm Logo" style={{ height: '40px' }} />
          </Grid>
          <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: '#d4ff63' }} gutterBottom>
              AZIENDA AGRICOLA
            </Typography>
            <Typography variant="body2">Agricultura</Typography>
            <Typography variant="body2">Allevamenti</Typography>
            <Typography variant="body2">Bottega agricola</Typography>
            <Typography variant="body2">Punti vendita</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: '#d4ff63' }} gutterBottom>
              FATTORIA DIDATTICA
            </Typography>
            <Typography variant="body2">Attività scuole</Typography>
            <Typography variant="body2">Attività per grandi e piccoli</Typography>
            <Typography variant="body2">Planetario</Typography>
            <Typography variant="body2">Fattoria sociale</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: '#d4ff63' }} gutterBottom>
              AGRITURISMO
            </Typography>
            <Typography variant="body2">BIO E SOSTENIBILITÀ</Typography>
            <Typography variant="body2">TURISMO E TERRITORIO</Typography>
            <Typography variant="body2">CONTATTI</Typography>
            </Stack>
          </Grid>
          <Box>
              <img src={UE_image} alt="EU Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Box>
          
        </Grid>
        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap'}}>
        <Box sx={{display:'flex', flexDirection:'column'}}>
          <Typography variant="body2">
            Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare
          </Typography>
          <Typography variant="body2">
            P.IVA 02322540184
          </Typography>
          </Box>
          <Box>
            <Typography variant="body2" component="span">
              Code Emiliano Bucci
            </Typography>
            <Typography variant="body2" component="span" sx={{ ml: 2 }}>
              Design Michele Fasani
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;