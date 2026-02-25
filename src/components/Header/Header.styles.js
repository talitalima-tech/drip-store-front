import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #FFFFFF;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
  padding-left: 104px;
  padding-right: 100px;

  /* No Mobile, o padding gigante do Figma precisa diminuir para não esmagar a logo */
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
  }
`;

export const DesktopOnly = styled.div`
  display: ${props => props.flex ? 'flex' : 'block'};
  align-items: center;
  flex: ${props => props.flex || 'none'};

  /* ESCONDE NO MOBILE */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  /* MOSTRA SÓ NO MOBILE */
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

/* ESTILO DO MENU LATERAL (DRAWER) */
export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-100%'}; /* Desliza para dentro/fora */
  width: 300px;
  height: 100%;
  background-color: white;
  z-index: 1000;
  padding: 30px;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
`;