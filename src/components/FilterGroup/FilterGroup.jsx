import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%; /* Garante que ocupe o espaço disponível */
  
  h4 {
    font-size: 14px;
    color: #474747;
    margin-bottom: 12px;
    font-weight: 700;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px; /* Aumentei um pouco para facilitar o toque no celular */
  
  /* Garante que o texto não "esprema" o input */
  label {
    font-size: 14px;
    color: #474747;
    cursor: pointer;
    user-select: none; /* Evita selecionar texto ao clicar rápido */
    flex: 1; /* Faz o label ocupar o resto da linha */
  }

  input {
    width: 22px;
    height: 22px;
    min-width: 22px; /* Impede o input de encolher em telas muito estreitas */
    min-height: 22px;
    cursor: pointer;
    accent-color: #C92071; 
    border: 1px solid #CCCCCC;
    border-radius: 2px;
  }

  /* Ajuste específico para área de toque no celular (363px) */
  @media (max-width: 480px) {
    margin-bottom: 15px;
    
    label {
      font-size: 15px; /* Texto levemente maior para leitura no celular */
    }
    
    input {
      width: 24px; /* Input um pouco maior para facilitar o check */
      height: 24px;
    }
  }
`;

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {options.map((option, index) => (
        <Option key={index}>
          <input 
            type={inputType} 
            // Usamos o index junto com o texto para garantir IDs únicos
            id={`${title}-${index}`} 
            name={title} 
          />
          <label htmlFor={`${title}-${index}`}>{option.text}</label>
        </Option>
      ))}
    </Container>
  );
};

export default FilterGroup;