import styled from "styled-components";
import Layout from "../../Layouts/Layout";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import sneakerImage from '../../assets/White-Sneakers-PNG.png';

const MainContent = styled.main`
  padding: 40px 100px;
  background-color: #F5F5F5;
`;

const ProductFlex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 80px;
`;

const ProductViewPage = () => {
  // Dados simulados para a galeria (Requisito 7.1)
  const productImages = [
    { src: sneakerImage },
    { src: sneakerImage },
    { src: sneakerImage},
  ];

  // Dados para produtos recomendados (Requisito 7.4)
  const recommendedProducts = [
    { name: "K-Swiss V8 - Masculino", image: "/product-placeholder.png", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Feminino", image: "/product-placeholder.png", price: 49.9 },
    { name: "K-Swiss V8 - Feminino", image: "/product-placeholder.png", price: 49.9 },
    { name: "Tênis Casual", image: "/product-placeholder.png", price: 299 },
  ];

  return (
    <Layout>
      <MainContent>
        {/* PARTE SUPERIOR: Galeria e Informações */}
        <ProductFlex>
          {/* 7.1 - Galeria com dimensões fixas */}
          <Gallery 
            images={productImages} 
            showThumbs 
            width="700px" 
            height="570px" 
            radius="4px" 
          />

          {/* 7.3 - BuyBox (As informações do produto) */}
          <BuyBox 
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="837462"
            stars="4.7"
            rating="90"
            price={200}
            priceDiscount={149.9}
            description="O Tênis Nike Revolution 6 Next Nature Masculino é a escolha perfeita para corredores que buscam conforto e sustentabilidade. Com amortecimento macio e design moderno."
          >
            {/* 7.2 - ProductOptions inseridos como filhos (children) */}
            <h5 style={{ color: '#8F8F8F', marginBottom: '10px' }}>Tamanho</h5>
            <ProductOptions 
              options={["39", "40", "41", "42", "43"]} 
              shape="square" 
              radius="4px" 
              type="text" 
            />

            <h5 style={{ color: '#8F8F8F', marginBottom: '10px', marginTop: '20px' }}>Cores</h5>
            <ProductOptions 
              options={["#6FEE8D", "#FF6969", "#5E5E5E", "#6D70B7"]} 
              shape="circle" 
              type="color" 
            />
          </BuyBox>
        </ProductFlex>

        {/* 7.4 - Seção de Produtos Recomendados */}
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