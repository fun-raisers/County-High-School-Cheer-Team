import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import Product from '../components/Product';


type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.productName}
              height="140"
              image={`${process.env.PUBLIC_URL}/images/${product.id}.jpeg`}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.productDescription}
              </Typography>
              <Typography variant="h6">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
