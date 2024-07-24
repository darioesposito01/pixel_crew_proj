import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import EventCardsSection from './Components/BoxesSection';
import { Container } from '@mui/material';

const SoulFarmHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar/>
        <HeroSection/>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <EventCardsSection/>
        </Container>
    </div>
  );
};

export default SoulFarmHomepage;