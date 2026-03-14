import styled from "styled-components";
import Layout from "../../Layouts/Layout"; 
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import ProductListing from "../../components/ProductListing/ProductListing";
import { PRODUCTS } from "../../data/db";

const Container = styled.div`
  display: flex;
  flex-direction: row; /* Lado a lado no desktop */
  padding: 40px 100px;
  background-color: #F5F5F5;
  gap: 30px;

  /* Tablet (iPad) */
  @media (max-width: 1024px) {
    padding: 30px 40px;
    gap: 20px;
  }

  /* Celular */
  @media (max-width: 768px) {
    flex-direction: column; /* Filtro vai para cima dos produtos */
    padding: 20px;
    gap: 20px;
  }
`;

const Sidebar = styled.aside`
  width: 308px;
  flex-shrink: 0; /* Impede que o filtro esmague no desktop */

  @media (max-width: 1024px) {
    width: 250px; /* Reduz um pouco no tablet */
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa tudo no celular */
  }
`;

const Content = styled.section`
  flex: 1;
  width: 100%;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h4 {
    font-size: 16px;
    color: #474747;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    
    h4 {
      font-size: 14px;
    }
  }
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  
  label {
    font-size: 16px;
    font-weight: 700;
    color: #474747;
    margin-right: 10px;
    white-space: nowrap;
  }

  select {
    width: 308px;
    height: 60px;
    border: 1px solid #474747;
    border-radius: 4px;
    padding: 0 15px;
    background-color: transparent;

    @media (max-width: 1024px) {
      width: 220px; /* Ajuste para tablets */
    }

    @media (max-width: 768px) {
      width: 100%; /* Ocupa a largura total no mobile */
      height: 48px;
    }
  }
`;

const FilterBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 4px;

  h3 {
    font-size: 16px;
    color: #474747;
    margin-bottom: 5px;
  }

  hr {
    margin: 15px 0;
    border: 0.5px solid #CCCCCC;
  }
`;

const ProductsGrid = styled.div`
  /* O segredo da responsividade dos produtos está aqui */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas por padrão */
  gap: 20px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 1 coluna em celulares pequenos */
  }
`;

const ProductListingPage = () => {
  return (
    <Layout>
      <Container>
        <Sidebar>
          <FilterBox>
            <h3>Filtrar por</h3>
            <hr />
            <FilterGroup 
              title="Marca" 
              inputType="checkbox" 
              options={[{text: "Adidas"}, {text: "Balenciaga"}, {text: "K-Swiss"}, {text: "Nike"}, {text: "Puma"}]} 
            />
            <FilterGroup 
              title="Categoria" 
              inputType="checkbox" 
              options={[{text: "Esporte e Lazer"}, {text: "Casual"}, {text: "Utilitário"}, {text: "Corrida"}]} 
            />
            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[{text: "Masculino"}, {text: "Feminino"}, {text: "Unissex"}]} 
            />
          </FilterBox>
        </Sidebar>

        <Content>
          <TopContent>
            <h4>Resultados para "Tênis" - {PRODUCTS.slice(0, 15).length} produtos</h4>
            
            <OrderContainer>
              <label>Ordenar por:</label>
              <select>
                <option value="relevantes">Mais relevantes</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </OrderContainer>
          </TopContent>

          <ProductsGrid>
             <ProductListing products={PRODUCTS.slice(0, 15)} />
          </ProductsGrid>
        </Content>
      </Container>
    </Layout>
  );
};

export default ProductListingPage;