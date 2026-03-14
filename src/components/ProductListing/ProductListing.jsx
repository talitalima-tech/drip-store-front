import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';

const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
  
  /* Desktop: 4 colunas */
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  /* Celular Crítico (363px): 1 Coluna Total */
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Um produto embaixo do outro */
    gap: 20px;
    padding: 0 10px; /* Margem de segurança nas laterais */
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