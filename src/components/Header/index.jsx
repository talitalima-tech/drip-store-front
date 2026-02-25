import * as S from "./Header.styles";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import AuthLinks from "./AuthLinks";
import CartIcon from "./CartIcon";
import MainNav from "./MainNav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.HeaderWrapper>
      <S.Content>
        {/* 1. Hamburguer (Só Mobile) */}
        <S.MobileOnly>
          <FiMenu size={28} onClick={() => setMenuOpen(true)} style={{cursor: 'pointer'}} />
        </S.MobileOnly>

        {/* 2. Logo (Seu componente original) */}
        <Logo />

        {/* 3. SearchBar (Seu CSS fixo de 559px dentro do DesktopOnly) */}
        <S.DesktopOnly flex={1} style={{ marginLeft: "27px", marginRight: "48px" }}>
          <SearchBar />
        </S.DesktopOnly>

        {/* 4. AuthLinks e CartIcon */}
        <S.Actions>
          <S.DesktopOnly style={{ marginRight: "70px" }}>
            <AuthLinks />
          </S.DesktopOnly>
          
          <S.MobileOnly>
            <FiSearch size={24} />
          </S.MobileOnly>
          
          <CartIcon />
        </S.Actions>
      </S.Content>

      {/* 5. MainNav (Linha de baixo do Desktop) */}
      <S.DesktopOnly style={{ marginLeft: "100px", marginTop: "40px", marginBottom: "20px" }}>
        <MainNav />
      </S.DesktopOnly>

      {/* --- VERSÃO MOBILE (DRAWER) --- */}
      <S.Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <S.Drawer isOpen={menuOpen}>
        <S.DrawerHeader>
          <h3 style={{fontFamily: 'Inter'}}>Páginas</h3>
          <FiX size={28} onClick={() => setMenuOpen(false)} style={{cursor: 'pointer'}} />
        </S.DrawerHeader>
        
        {/* No Mobile, passamos uma prop para o MainNav saber que deve ficar vertical */}
        <MainNav isMobile /> 
        
        <hr style={{border: '1px solid #F5F5F5'}} />
        
        <AuthLinks />
      </S.Drawer>
    </S.HeaderWrapper>
  );
};

export default Header;