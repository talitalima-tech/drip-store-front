import styled from "styled-components";
import Layout from "../../Layouts/Layout";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import sneakerImage from '../../assets/White-Sneakers-PNG.png';
import React, { useEffect } from 'react'; // Adicione o useEffect aqui
import { useParams } from 'react-router-dom';
//Estilos para a página de visualização do produto (ProductViewPage)
const Breadcrumbs = styled.div`
  font-size: 14px;
  color: #474747;
  margin-bottom: 20px;
  span { font-weight: bold; }
`;

const ProductFlex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 992px) {
    flex-direction: column; /* Empilha Galeria e BuyBox no mobile */
    gap: 20px;
  }
`;

const MainContent = styled.main`
  padding: 40px 104px; 
  background-color: #F5F5F5;

  @media (max-width: 768px) {
    padding: 20px; 
  }
`;

const ProductViewPage = () => {
  const { id } = useParams(); // Pega o ID da URL

  // Faz a página subir ao topo sempre que mudar de produto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // Dados simulados para a galeria 
  const productImages = [
    { src: sneakerImage },
    { src: sneakerImage },
    { src: sneakerImage},
  ];

  // Dados para produtos recomendados
  const recommendedProducts = [
    { id: 1, name: "K-Swiss V8 - Masculino", image: "/product-placeholder.png", price: 200, priceDiscount: 149.9 },
    { id: 2, name: "K-Swiss V8 - Feminino", image: "/product-placeholder.png", price: 49.9 },
    { id: 3, name: "K-Swiss V8 - Feminino", image: "/product-placeholder.png", price: 49.9 },
    { id: 4, name: "Tênis Casual", image: "/product-placeholder.png", price: 299 },
  ];

  return (
    <Layout>
      <MainContent>
        {/* PARTE SUPERIOR: Galeria e Informações */}
        <Breadcrumbs>
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
        </Breadcrumbs>
        <ProductFlex>
          <Gallery 
            images={productImages} 
            showThumbs 
            width="700px" 
            height="570px" 
            radius="4px" 
          />

          <BuyBox 
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="38416711 | Casual | Nike "
            stars="4.7"
            rating="90"
            price={250}
            priceDiscount={219}
            description="O Tênis Nike Revolution 6 Next Nature Masculino é a escolha perfeita para corredores que buscam conforto e sustentabilidade. Com amortecimento macio e design moderno."
          >
            
            <h5 style={{ color: '#8F8F8F', marginBottom: '10px' }}>Tamanho</h5>
            <ProductOptions 
              options={["39", "40", "41", "42", "43"]} 
              shape="square" 
              radius="4px" 
              type="text" 
            />

            <h5 style={{ color: '#8F8F8F', marginBottom: '10px', marginTop: '20px' }}>Cores</h5>
            <ProductOptions 
              options={["rgba(111, 238, 255, 1)", "rgba(255, 105, 105, 1)", "rgba(94, 94, 94, 1)", "rgba(109, 112, 183, 1)"]} 
              shape="circle" 
              type="color" 
            />
          </BuyBox>
        </ProductFlex>

        {/* Seção de Produtos Recomendados */}
        <Section 
          title="Produtos recomendados" 
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </MainContent>
    </Layout>
  );
};

export default ProductViewPage;