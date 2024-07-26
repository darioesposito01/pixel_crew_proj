import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ButtonCustom from "./ButtonCustom";

const ProductCard = ({ product }) => (
    <Card elevation={0} sx={{
      flexShrink: 0,
      width: 180, 
      height: 220, 
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
        <Typography sx={{ mb: 1, fontSize: 13, fontWeight:'bold' }} variant="h7" component="div">
          {product.name}
        </Typography>
        <ButtonCustom>
          Scopri di più
        </ButtonCustom>
      </CardContent>
    </Card>
  );

  export default ProductCard