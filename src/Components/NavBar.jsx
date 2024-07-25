import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Frame from '../assets/Frame.png'; 
import { Typography } from '@mui/material';

const pages = ['Azienda agricola', 'Fattoria didattica', 'Agriturismo', 'Bio e sostenibilità', 'Turismo e territorio', 'Dove siamo'];

const Navbar = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#216545' }}>
      <Container maxWidth={false}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Frame} alt="Soul Farm Logo" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: 'white', display: 'block', mx:1 }}
              >
                <Typography textTransform={'none'} sx={{fontSize:14}}>
                {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;