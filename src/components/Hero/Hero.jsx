import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

import sneakerImage from '../../assets/White-Sneakers-PNG.png';
import fireIcon from '../../assets/fire.png';
import dotsImage from '../../assets/dots.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { desc: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo com conforto e tecnologia.' },
    { desc: 'Aproveite as melhores ofertas da semana com frete grátis para todo o Brasil em compras Nike.' },
    { desc: 'Conheça a nova coleção Air Max com preços exclusivos que você só encontra aqui na Digital Store.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 segundos para dar tempo de ler
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <HeroWrapper>
      <Content>
        <TextContent>
          <span className="subtitle">Melhores ofertas personalizadas</span>
          <h1>
            Queima de <br />
            estoque Nike 
            <img src={fireIcon} alt="Fogo" className="fire-img" />
          </h1>

          <p className="desc" key={currentSlide}>
            {slides[currentSlide].desc}
          </p>
          
          <button>Ver Ofertas</button>
        </TextContent>

        <ImageContainer>
          <img src={sneakerImage} className="sneaker" alt="Tênis Nike" />
          <img src={dotsImage} className="dots" alt="Pontos decorativos" />
        </ImageContainer>
      </Content>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === currentSlide} 
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </HeroWrapper>
  );
};

export default Hero;

// --- ESTILOS RESPONSIVOS ---

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  height: 80vh; /* Altura dinâmica em vez de fixa 681px */
  background-color: #F5F5F5;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Imagem em cima, texto embaixo no mobile */
    padding: 0 20px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 550px;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
  }

  span.subtitle {
    color: ${theme.colors.warning || '#E7BB1F'};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }

  h1 {
    font-size: 64px;
    font-weight: 800;
    line-height: 1.1;
    color: #1F1F1F;

    @media (max-width: 480px) {
      font-size: 40px; /* Reduz tamanho no celular 363px */
    }
  }

  .fire-img {
    width: 40px;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }

  p.desc {
    font-size: 18px;
    line-height: 28px;
    color: #666;
    margin: 20px 0 40px;
    /* Animação simples de fade ao trocar o texto */
    animation: fadeIn 0.8s ease-in-out;
  }

  button {
    background-color: ${theme.colors.primary};
    color: white;
    padding: 14px 60px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    width: auto;

    @media (max-width: 480px) {
      width: 100%; /* Botão ocupa tudo no mobile */
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%; /* Dinâmico */
  max-width: 733px;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 40px;
  }

  .sneaker {
    width: 100%;
    height: auto;
    transform: rotate(-19.34deg);
    position: relative;
    z-index: 2;
  }

  .dots {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    z-index: 1;
    opacity: 0.5;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? theme.colors.primary : '#CCCCCC'};
  cursor: pointer;
`;