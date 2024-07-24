import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Frame from '../assets/Frame.png'; 

const pages = ['Azienda agricola', 'Fattoria didattica', 'Agriturismo', 'Bio e sostenibilità', 'Turismo e territorio', 'Area clienti'];

const Navbar = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2e7d32' }}>
      <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Frame} alt="Soul Farm Logo" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;