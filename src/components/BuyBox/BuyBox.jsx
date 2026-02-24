import styled from "styled-components";
//Estilo do buybox
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 450px;
`;

const Name = styled.h1`
  font-size: 32px;
  color: #1F1F1F; 
  font-weight: 700;
  line-height: 1.2;
`;

const Reference = styled.p`
  font-size: 12px;
  color: #666666; 
  letter-spacing: 0.5px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .stars {
    background-color: #F6AA1C; 
    color: white;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .rating-total {
    color: #8F8F8F; 
    font-size: 14px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline; /* Alinha os preços pela base do texto */
  gap: 10px;

  .current-price {
    font-size: 32px;
    color: #474747;
    font-weight: 700;
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
  margin: 10px 0;
`;

const BuyButton = styled.button`
  width: 100%;
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
  width: 220px; 
  
  @media (max-width: 768px) {
    width: 100%; /* No mobile ele fica gigante para facilitar o clique */
  }
`;
// Componente BuyBox
const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Reference>Ref:{reference}</Reference>
      
      <RatingContainer>
        <div className="stars">
          {stars} 
          <img src="/src/assets/star-icon.svg" alt="estrela" />
        </div>
        <span className="rating-total">({rating} avaliações)</span>
      </RatingContainer>

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

      {/* Espaço para o ProductOptions (Tamanhos e Cores) */}
      <div style={{ margin: '20px 0' }}>
        {children}
      </div>

      <BuyButton>Comprar</BuyButton>
    </Container>
  );
};

export default BuyBox;

