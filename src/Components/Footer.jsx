import React from 'react';
import { Box, Container, Grid, Typography, Divider, Stack } from '@mui/material';
import UE_image from '../assets/UE_image.png';
import Frame from '../assets/Frame.png';
import FooterSection from './FooterComponents/FooterSection';
import CopyrightSection from './FooterComponents/CopyrightSection';


const FooterDivider = () => (
  <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
);

const Footer = () => {
  const sections = [
    {
      title: "AZIENDA AGRICOLA",
      items: ["Agricultura", "Allevamenti", "Bottega agricola", "Punti vendita"]
    },
    {
      title: "FATTORIA DIDATTICA",
      items: ["Attività scuole", "Attività per grandi e piccoli", "Planetario", "Fattoria sociale"]
    },
    {
      title: "AGRITURISMO",
      items: ["BIO E SOSTENIBILITÀ", "TURISMO E TERRITORIO", "CONTATTI"],
      coloredItems: true
    }
  ];

  return (
    <Box sx={{ bgcolor: '#1E5D3F', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container sx={{flexDirection:'column'}}>
          <Grid item>
            <img src={Frame} alt="Soul Farm Logo" style={{ height: '40px' }} />
          </Grid>
          <FooterDivider />
          <Box sx={{display:'flex', flexDirection:'row'}}>
            {sections.map((section, index) => (
              <FooterSection key={index} {...section} />
            ))}
            <Box>
              <img src={UE_image} alt="EU Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Box>
        </Grid>
        <FooterDivider />
        <CopyrightSection/>
      </Container>
    </Box>
  );
};

export default Footer;