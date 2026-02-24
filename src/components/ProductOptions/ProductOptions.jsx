import styled from "styled-components";
import { useState } from "react";

// Este é o "quadradinho" ou "circulozinho" individual
const OptionItem = styled.div`
  /* LOGICA DO SHAPE: Se for circle, arredonda tudo. Se square, usa o radius da prop */
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.radius};
  
  /* LOGICA DE TAMANHO: Circle é 31px, Square é 46px de largura por 45px de altura */
  width: ${props => props.shape === 'circle' ? '31px' : '46px'};
  height: ${props => props.shape === 'circle' ? '31px' : '45px'};
  
  /* LOGICA DE COR: Se o tipo for 'color', o fundo é a própria opção (ex: #000) */
  background-color: ${props => props.type === 'color' ? props.value : 'transparent'};
  
  /* ESTILOS PADRÃO */
  border: 1px solid #CCCCCC; /* light-gray-2 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #474747; /* dark-gray-2 */
  transition: 0.2s;

  /* REQUISITO: Se selecionado, borda de 2px na cor primary */
  border: ${props => props.selected ? '2px solid #C92071' : '1px solid #CCCCCC'};

  &:hover {
    border-color: #C92071; /* Cor primária no hover */
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProductOptions = ({ options, shape, radius, type }) => {
  // Criamos um 'estado' para guardar qual opção está selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <OptionsContainer>
      {/* Usamos o .map() para percorrer a lista de tamanhos ou cores */}
      {options.map((option, index) => (
        <OptionItem
          key={index}
          shape={shape}
          radius={radius}
          type={type}
          value={option} // Passamos o valor (ex: #000 ou "39")
          selected={selectedOption === option} // Verifica se este é o selecionado
          onClick={() => setSelectedOption(option)} // Ao clicar, ele vira o selecionado
        >
          {/* Se o tipo for texto, mostramos o texto. Se for cor, deixamos vazio (o fundo já tem cor) */}
          {type === 'text' && option}
        </OptionItem>
      ))}
    </OptionsContainer>
  );
};

export default ProductOptions;