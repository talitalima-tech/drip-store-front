import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';

const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px; 
  }
`;

export default function ProductListing({ products = [] }) {
  return (
    <GridContainer>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          priceDiscount={p.priceDiscount}
          category={p.category}
          tag={p.tag}
        />
      ))}
    </GridContainer>
  );
}