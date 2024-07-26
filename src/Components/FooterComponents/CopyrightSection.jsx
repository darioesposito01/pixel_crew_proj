import { Box, Typography } from "@mui/material";
import React from "react";

const CopyrightSection = () => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Typography variant="body2">
          Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare
        </Typography>
        <Typography variant="body2">
          P.IVA 02322540184
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" component="span">
          Code Emiliano Bucci
        </Typography>
        <Typography variant="body2" component="span" sx={{ ml: 2 }}>
          Design Michele Fasani
        </Typography>
      </Box>
    </Box>
  );
  
  export default CopyrightSection