import React from 'react';

type Product = {
    id: number;
    productName: string;
    productDescription: string;
    price: number;
    keepPrice: number;
    image: string;
};

interface ProductProps {
    id: number;
    productName: string;
    productDescription: string;
    price: number;
    keepPrice: number;
    image: string;
}

const Product: React.FC<ProductProps> = ({ productName, image, productDescription, price }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <img src={`${process.env.PUBLIC_URL}/images/product-image-placeholder.jpg`} alt={productName} width="200" /> 
      <p>{productDescription}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;
