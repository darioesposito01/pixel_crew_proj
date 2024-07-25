import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


import headerbg from '../assets/headerbg.png';


const HeroContainer = styled(Box)(({ theme }) => ({
  height: '80vh',
  backgroundImage: `url(${headerbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
//   alignItems: 'stretch',
  color: 'white',
}));


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
          <Typography variant="h1" component="h1" fontWeight={'bold'}  color="#4CB973">
            Soulfarm
          </Typography>
          <Typography variant="h1" fontWeight={'bold'} color="black">
            Agricoltura
          </Typography>
          <Typography variant="h1"  fontWeight={'bold'} color="black">
            Familiare
          </Typography>
          <Typography maxWidth={250} variant="body1"  paragraph color={'black'}>
            L'azienda è certificata biologica ed è composta da orto, frutteto e pascolo
          </Typography>
        </ContentBox>
      
    </HeroContainer>
  );
};

export default HeroSection;