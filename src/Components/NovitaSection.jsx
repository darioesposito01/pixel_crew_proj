import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import small_image from '../assets/small_image.png';
import ButtonCustom from './ButtonCustom';

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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (scrollOffset) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

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
            marginLeft:3
          }}
        >
          {products.map((product) => (
            <Card key={product.id} elevation={0} sx={{ 
              flexShrink: 0,
              width: 180, 
              height: 240, 
              mx: 1,
              borderRadius: 3, 
              bgcolor: 'white', 
              pb: 1
            }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  p: 2,
                  borderRadius: 6,
                  height: '65%'
                }}
              />
              <CardContent sx={{ px: 2, py: 0 }}>
                <Typography sx={{ mb: 1, fontSize:13 }} variant="h7"  component="div">
                  {product.name}
                </Typography>
                <ButtonCustom>
                  Scopri di più
                </ButtonCustom>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NovitaBottegaSection;