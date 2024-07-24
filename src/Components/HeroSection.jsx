import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Importa l'immagine di sfondo
import headerbg from '../assets/headerbg.png';

// Styled component per il contenitore principale
const HeroContainer = styled(Box)(({ theme }) => ({
  height: '80vh',
  backgroundImage: `url(${headerbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
//   alignItems: 'stretch',
  color: 'white',
}));

// Styled component per il box del contenuto con sfondo sfocato
const ContentBox = styled(Box)(({ theme }) => ({
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // backdropFilter: 'blur(10px)',
    padding: theme.spacing(4),
    width: '50%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    
    background: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%)',
  }));

const HeroSection = () => {
  return (
    <HeroContainer>
      
        <ContentBox elevation={3}>
          <Typography variant="h2" component="h1" gutterBottom color="primary">
            Soulfarm
          </Typography>
          <Typography variant="h4" gutterBottom color="secondary">
            Agricoltura
          </Typography>
          <Typography variant="h4" gutterBottom color="secondary">
            Familiare
          </Typography>
          <Typography variant="body1" paragraph>
            L'azienda è certificata biologica ed è composta da orto, frutteto e...
          </Typography>
        </ContentBox>
      
    </HeroContainer>
  );
};

export default HeroSection;