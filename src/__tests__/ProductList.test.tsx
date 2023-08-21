// ProductList.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '../components/ProductList';

type Product = {
    id: number;
    name: string;
    price: number;
    keepPrice: number;
    description: string;
    image: string;
  };  

// Our mock data
const mockProducts = [
  // Add a couple of product examples based on your actual data structure.
  {
    id: 1,
    name: "Laundry Bundle",
    price: 50,
    keepPrice: 12.50,
    description: "Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop",
    image: "path_to_image.jpg"
  },
  {
    id: 2,
    name: "Smooth Shave Bundle",
    price: 45,
    keepPrice: 11.25,
    description: "Shave Soap, Body Scrub, Shower Oil",
    image: "path_to_another_image.jpg"
  },
];

describe('<ProductList />', () => {
  it('renders without crashing', () => {
    render(<ProductList products={mockProducts} />);
  });

  it('displays a list of products', () => {
    const { getByText } = render(<ProductList products={mockProducts} />);
    
    expect(getByText('Laundry Bundle')).toBeInTheDocument();
    expect(getByText('Smooth Shave Bundle')).toBeInTheDocument();
  });

  it('displays an image, description, and price breakdown for each product', () => {
    const { getByText, getByAltText } = render(<ProductList products={mockProducts} />);
    
    // Check for image
    expect(getByAltText('Laundry Bundle')).toBeInTheDocument();
    expect(getByAltText('Smooth Shave Bundle')).toBeInTheDocument();
    
    // Check for description
    expect(getByText('Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop')).toBeInTheDocument();
    expect(getByText('Shave Soap, Body Scrub, Shower Oil')).toBeInTheDocument();
    
    // Check for price breakdown
    // Here, you can extend based on how you format/display the prices.
    expect(getByText('$50')).toBeInTheDocument();
    expect(getByText('$45')).toBeInTheDocument();
    expect(getByText('$12.50')).toBeInTheDocument();
    expect(getByText('$11.25')).toBeInTheDocument();
  });
});
