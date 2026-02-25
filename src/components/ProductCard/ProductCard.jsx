import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

//Container Principal
const CardContainer = styled.div`
  width: 100%; 
  max-width: 292px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer; 

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

//O Wrapper cinza da imagem
const ImageWrapper = styled.div`
  width: 100%;
  height: 321px;
  background-color: #F5F5F5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    height: 180px; 
  }
`;

const ProductImage = styled.img`
  width: 248px; 
  height: 134px; 
  object-fit: contain;
  transform: rotate(-30deg); 
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: rotate(-30deg) scale(1.1);
  }

  @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }
`;

const Name = styled.div`
  font-size: 16px;
  color: #474747;
  font-weight: 400;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1F1F1F;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const PriceStriked = styled.div`
  font-size: 24px;
  color: #8F8F8F;
  text-decoration: line-through;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    
    navigate(`/produtos/${id}`);
    
    // Opcional: Garante que a página nova abra no topo do scroll
    window.scrollTo(0, 0);
  };

  const formatBRL = (value) =>
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : value;

  return (
    <CardContainer onClick={handleProductClick}>
      <ImageWrapper>
        <ProductImage src={image} alt={name} />
      </ImageWrapper>

      <Name>{name}</Name>

      {!priceDiscount ? (
        <Price>{formatBRL(price)}</Price>
      ) : (
        <PriceRow>
          <Price>{formatBRL(priceDiscount)}</Price>
          <PriceStriked>{formatBRL(price)}</PriceStriked>
        </PriceRow>
      )}
    </CardContainer>
  );
};

export default ProductCard;