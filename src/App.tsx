import React from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ProductList from './components/ProductList';
import productsData from './data/products';
import theme from './theme';
import { ReactComponent as Logo } from './assets/buff-logo.svg';


const App: React.FC = () => {
  const productsFromTemplate = JSON.parse('[{"id":1,"productName":"Laundry Bundle","productDescription":"Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop.","price":"$50.00"},{"id":2,"productName":"Smooth Shave Bundle","productDescription":"Shave Soap, Body Scrub, Shower Oil.","price":"$45.00"},{"id":3,"productName":"Moisturizing Body Butter Bundle","productDescription":"Body Butter, Moisturizing Shea Soap Bar, Silicone Soap Dish.","price":"$35.00"},{"id":4,"productName":"Relaxing Bath Bundle","productDescription":"Epsom Salt, Bath Bomb, Wooden Scoop.","price":"$35.00"},{"id":5,"productName":"Buff’s 5 Best Soap Bundle","productDescription":"Buff’s 5 Best-Selling Soap Bars.","price":"$35.00"},{"id":6,"productName":"Buff’s 5 Best Bath Bomb Bundle","productDescription":"Buff’s 5 Best-Selling Bath Bombs."},{"id":7,"productName":"Single Shea Soap + Soap Sleeve","productDescription":"{Narcissist | All Hail the Queen | Good Morning Sunshine | Island Nectar | Commando} Soap + Soap Sleeve.","price":"$15.00"},{"id":8,"productName":"Bull Froggie In Love","productDescription":"Bully favorite","price":"$10.00"}]');
  const products = productsFromTemplate ?? productsData;
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline /> {/* Normalize the CSS */}
      <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
        <Toolbar>
        <Logo style={{ height: 50, marginRight: 16 }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            County High School Cheer Team
            </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography sx={{ paddingTop: '24px' }}>
          <strong>This is the County High School Marching Band Fundraiser 🥁. A portion of all sales will go to the County High School cheer team! Thank you for the support! Go Bullfrogs! </strong>
        </Typography>
        <Typography sx={{ paddingTop: '24px' }}>
           Call Ms. BandDirector for any questions <a href="tel:11231231234">11231231234</a>
          <strong>This fundraiser ends 2023-09-13</strong>
        </Typography>
      </Container>
      <Container sx={{ paddingTop: '24px' }}>
        <ProductList products={products} />
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
