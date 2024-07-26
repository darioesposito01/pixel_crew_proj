import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'CustomFont',
  
    h1: {
      fontFamily: 'CustomFont',
    },
    h2: {
      fontFamily: 'CustomFont',
      fontWeight:'bold'
    },
    h3: {
        fontFamily: 'CustomFont',
        fontWeight:'bold'
      },
    h4: {
        fontFamily: 'CustomFont',
        fontWeight:'bold'
      },
    h5: {
        fontFamily: 'CustomFont',
        fontWeight:'bold'
      },
    body1:{
        fontFamily: 'Lexend',
        // fontWeight:'bold'
    },
    body2:{
        fontFamily: 'Lexend',
        
        // fontWeight:'bold'
    },
    subtitle1:{
        fontFamily: 'Lexend',
        // fontWeight:'bold'
    },
    caption:{
        fontFamily: 'ButterFont',
        
    }
  
  },
});

export default theme;