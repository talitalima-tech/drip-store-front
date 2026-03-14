import styled from "styled-components";
import StarRating from "../StarRating/StarRating";

// Estilo do buybox
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 450px;
  padding: 0; /* Remove paddings internos que podem apertar o conteúdo */

  @media (max-width: 363px) {
    gap: 10px; /* Diminui o espaçamento em telas muito pequenas */
  }
`;

const Name = styled.h1`
  font-size: 32px;
  color: #1F1F1F; 
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 24px; /* Diminui a fonte para o título não ocupar a tela toda */
  }
`;

const Reference = styled.p`
  font-size: 12px;
  color: #666666; 
  letter-spacing: 0.5px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Caso o preço seja grande, ele quebra linha em vez de sumir */
  align-items: baseline;
  gap: 10px;
  margin-top: 5px;

  .current-price {
    font-size: 32px;
    color: #474747;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .old-price {
    font-size: 16px;
    color: #CCCCCC;
    text-decoration: line-through;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #474747;
  line-height: 22px;
  margin: 5px 0;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

const BuyButton = styled.button`
  width: 220px; /* Largura padrão desktop */
  height: 48px;
  background-color: #F6AA1C; 
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: #E59810;
  }

  /* Ajuste crucial para telas de 363px */
  @media (max-width: 768px) {
    width: 100%; /* Botão ocupa a largura total para facilitar o toque */
    height: 54px; /* Um pouco mais alto no mobile para melhor ergonomia */
  }
`;

const OptionsWrapper = styled.div`
  margin: 15px 0;
  width: 100%;
`;

// Componente BuyBox
const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Reference>Ref: {reference}</Reference>

      {/* StarRating precisa ser internamente responsivo também */}
      <StarRating rating={stars} totalReviews={rating} />

      <PriceWrapper>
        {priceDiscount ? (
          <>
            <span className="current-price">R$ {priceDiscount}</span>
            <span className="old-price">R$ {price}</span>
          </>
        ) : (
          <span className="current-price">R$ {price}</span>
        )}
      </PriceWrapper>

      <Description>{description}</Description>

      {/* Container para tamanhos e cores */}
      <OptionsWrapper>
        {children}
      </OptionsWrapper>

      <BuyButton>Comprar</BuyButton>
    </Container>
  );
};

export default BuyBox;