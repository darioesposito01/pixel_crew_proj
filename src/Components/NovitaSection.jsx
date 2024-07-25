import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import small_image from '../assets/small_image.png';
import useScrollControl from '../hooks/useScrollControl';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Mele di bosco', image: small_image },
  { id: 2, name: 'Mele di bosco', image: small_image },
  { id: 3, name: 'Mele di bosco', image: small_image },
  { id: 4, name: 'Mele di bosco', image: small_image },
  { id: 5, name: 'Mele di bosco', image: small_image },
  { id: 6, name: 'Mele di bosco', image: small_image },
  { id: 7, name: 'Mele di bosco', image: small_image },
  { id: 8, name: 'Mele di bosco', image: small_image },
  { id: 9, name: 'Mele di bosco', image: small_image },
  { id: 10, name: 'Mele di bosco', image: small_image },
  { id: 11, name: 'Mele di bosco', image: small_image },
];

const NovitaBottegaSection = () => {
  const scrollContainerRef = useRef(null);
  const { showLeftArrow, showRightArrow, scroll } = useScrollControl(scrollContainerRef);

  return (
    <Box sx={{ py: 6, px: 2, bgcolor: '#F4F4F4' }}>
    <Box sx={{position:'relative'}}>
        <>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Le novità in bottega
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4}}>
        Nella cucina professionale/laboratorio multifunzionale (internamente allimentata e corrente) che è stato allestito
      </Typography>
      </>
      {showLeftArrow && (
          <IconButton
            onClick={() => scroll(-200)}
            sx={{
              position: 'absolute',
              right:50,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(65,65,65,1)',
              '&:hover': { bgcolor: 'rgba(65,65,65,0.8)' },
            }}
          >
            <ChevronLeft sx={{color:'white'}} />
          </IconButton>
        )}
        {showRightArrow && (
          <IconButton
            onClick={() => scroll(200)}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(65,65,65,1)',
              '&:hover': { bgcolor: 'rgba(65,65,65,0.8)' 
            
            },
            }}
          >
            <ChevronRight sx={{color:'white'}} />
          </IconButton>
        )}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            mx: -1,
            paddingLeft:3
          }}
        >
          {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NovitaBottegaSection;