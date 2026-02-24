import styled from "styled-components";
import { useState } from "react";

// Este é o "quadradinho" ou "circulozinho" individual
const OptionItem = styled.div`
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.radius};
  
  width: ${props => props.shape === 'circle' ? '31px' : '46px'};
  height: ${props => props.shape === 'circle' ? '31px' : '45px'};
  
  background-color: ${props => props.type === 'color' ? props.value : 'transparent'};
  
  /* ESTILOS PADRÃO */
  border: 1px solid #CCCCCC;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #474747; 
  transition: 0.2s;

  /* REQUISITO: Se selecionado, borda de 2px na cor primary */
  border: ${props => props.selected ? '2px solid #C92071' : '1px solid #CCCCCC'};

  &:hover {
    border-color: #C92071; 
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProductOptions = ({ options, shape, radius, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          shape={shape}
          radius={radius}
          type={type}
          value={option} 
          selected={selectedOption === option} 
          onClick={() => setSelectedOption(option)} 
        >
          {type === 'text' && option}
        </OptionItem>
      ))}
    </OptionsContainer>
  );
};

export default ProductOptions;