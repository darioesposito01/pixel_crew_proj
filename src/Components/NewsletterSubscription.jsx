import React from 'react';
import { Box, Typography, TextField, Button, Container, InputAdornment } from '@mui/material';

import capanno from '../assets/capanno.jpg';
import ButtonCustom from './ButtonCustom';

const NewsletterSubscription = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F1E2', py: 6 }}>
     <Container maxWidth="lg">
    <Box
      sx={{
        position: 'relative',
        borderRadius:7,
        height: '500px',
        backgroundImage: `url(${capanno})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 7
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '600px',
          px: 3,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Rimani aggiornato
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Per non perderti nessuna novità
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            gap: 1,
            mt: 2,
          }}
        >
         <TextField
                variant="outlined"
                placeholder="Email"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    
                    borderRadius:10

                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                        <ButtonCustom>
                        Iscriviti
                        </ButtonCustom>
                    </InputAdornment>
                  ),
                }}
              />
        </Box>
      </Box>
    </Box>
    </Container>
    </Box>
  );
};

export default NewsletterSubscription;