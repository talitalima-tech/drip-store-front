import styled from "styled-components";
import { FaStar } from "react-icons/fa"; 

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 5px 0;
`;

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #F6AA1C; 
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 14px;

  svg {
    font-size: 12px; /* A estrela branca dentro do badge */
  }
`;

const IconsGroup = styled.div`
  display: flex;
  gap: 2px;
  color: #F6AA1C; /* Amarelo das estrelas externas */
  font-size: 16px;
`;

const TotalReviews = styled.span`
  color: #8F8F8F;
  font-size: 14px;
`;

const StarRating = ({ rating, totalReviews }) => {
  return (
    <StarsContainer>
      {/* Sequência de 5 estrelas amarelas (como no Figma) */}
      <IconsGroup>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </IconsGroup>

      <RatingBadge>
        {rating} <FaStar color="white" />
      </RatingBadge>

      {/* Quantidade de avaliações */}
      <TotalReviews>({totalReviews} avaliações)</TotalReviews>
    </StarsContainer>
  );
};

export default StarRating;