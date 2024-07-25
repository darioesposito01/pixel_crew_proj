import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


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
  return (
    <Box sx={{ py: 6, px: 2, bgcolor:'#F4F4F4'}}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Le novità in bottega
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
        Nella cucina professionale/laboratorio multifunzionale (internamente allimentata e corrente) che è stato allestito
      </Typography>
      
      <Box sx={{ position: 'relative' }}>
        <Swiper
          slidesPerView={6}
          spaceBetween={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 8 },
            1024: { slidesPerView: 8 },
          }}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card elevation={0} sx={{ width:180, height:240,marginX:1, borderRadius: 5, bgcolor:'white', paddingBottom:1}}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    padding:2,
                    borderRadius:6,
                    height:'65%'
                  }}
                />
                <CardContent sx={{paddingX: 2, paddingY:0}}>
                  <Typography sx={{marginBottom:1}} variant="h7" component="div">
                    {product.name}
                  </Typography>
                  <ButtonCustom>
                  Scopri di più
                  </ButtonCustom>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          className="swiper-button-prev"
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(255,255,255,0.5)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          className="swiper-button-next"
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(255,255,255,0.5)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NovitaBottegaSection;