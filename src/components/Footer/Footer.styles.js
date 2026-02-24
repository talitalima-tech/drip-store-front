import styled from "styled-components";

export const FooterBackground = styled.footer`
  background-color: #1f1f1f;
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

export const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 72px 104px 40px;

  /* No Mobile, diminuímos apenas o padding lateral para o conteúdo não sumir */
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

/* para organizar a LOGO + COLUNAS */
export const TopSection = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column; 
    align-items: center;
    text-align: center;
  }

`;

/* BLOCO LOGO */
export const BrandArea = styled.div`
  width: 255px; /* distancia ate a coluna Informacao */
  margin-right: 255px;

  @media (max-width: 1100px) {
    margin-right: 50px; /* Reduz a margem em telas médias antes de quebrar */
  }

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%; /* Ocupa tudo para centralizar a logo e texto */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 253px;
  height: 44px;

   @media (max-width: 600px) {
    margin: 0 auto 20px;
  }
`;

export const Description = styled.p`
  width: 307px;
  height: 78px;
  margin: 24px 0;
  font-size: 16px;
  line-height: 26px;
  color: #cccccc;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 36px;
`;

export const FacebookIcon = styled.img`
  width: 11px;
  height: 21px;
`;

export const InstagramIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const TwitterIcon = styled.img`
  width: 22px;
  height: 18px;
`;

/* COLUNAS */
export const Columns = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column; /* Empilha Informação, Categorias e Contato */
    align-items: center;
    gap: 40px; /* Espaço entre as colunas no mobile */
`;

export const ColumnInfo = styled.div`
  width: 135px;
  margin-right: 102px;
  @media (max-width: 768px) { margin-right: 0; }
`;

export const ColumnCategories = styled.div`
  width: 96px;
  margin-right: 168px;
  @media (max-width: 768px) { margin-right: 0; }
`;

export const ColumnContact = styled.div`
  width: 231px;
  @media (max-width: 768px) { width: 100%; }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #444;
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #cccccc;
`;

