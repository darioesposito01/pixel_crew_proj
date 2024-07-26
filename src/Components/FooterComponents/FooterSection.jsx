import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const FooterSection = ({ title, items, coloredItems = false }) => (
    <Grid item xs={12} md={3}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ color: '#d4ff63' }} gutterBottom>
          {title}
        </Typography>
        {items.map((item, index) => (
          <Typography 
            key={index} 
            variant="body2" 
            sx={coloredItems ? { color: '#d4ff63' } : {}}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Grid>
  );

  export default FooterSection