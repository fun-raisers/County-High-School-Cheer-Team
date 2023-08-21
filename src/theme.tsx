import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#7FC7BA',
    },
    secondary: {
      main: '#E3F7F4',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#F2FaF8',
    },
    text: {
        primary: '#3C3A38',
        secondary: '#403e3c'
    }
  },
});

export default theme;