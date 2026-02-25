import LogoFooter from "../../assets/logo-footer.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import InfoColumn from "./InfoColumn";
import * as S from "./Footer.styles";

const Footer = () => {
  return (
    <S.FooterBackground>
      <S.FooterContainer>
        <S.TopSection>
          <S.BrandArea>
            <S.Logo src={LogoFooter} alt="Drip Store Logo" />
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </S.Description>
            <S.SocialIcons>
              <a href="#"><S.FacebookIcon src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><S.InstagramIcon src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><S.TwitterIcon src={twitterIcon} alt="Twitter" /></a>
            </S.SocialIcons>
          </S.BrandArea>

          <S.Columns>
            <S.ColumnInfo>
              <InfoColumn
                title="Informação"
                informations={[
                  { text: "Sobre Drip Store", link: "/about" },
                  { text: "Segurança", link: "#" },
                  { text: "Wishlist", link: "#" },
                  { text: "Blog", link: "#" },
                  { text: "Trabalhe conosco", link: "#" },
                  { text: "Meus Pedidos", link: "#" },
                ]}
              />
            </S.ColumnInfo>

            <S.ColumnCategories>
              <InfoColumn
                title="Categorias"
                informations={[
                  { text: "Camisetas", link: "#" },
                  { text: "Calças", link: "#" },
                  { text: "Bonés", link: "#" },
                  { text: "Headphones", link: "#" },
                  { text: "Tênis", link: "#" },
                ]}
              />
            </S.ColumnCategories>

            <S.ColumnContact>
              <InfoColumn
                title="Contato"
                informations={[
                  { text: "Av. Santos Dumont, 1510 - CE", link: "#" },
                  { text: "(85) 3051-3411", link: "#" },
                ]}
              />
            </S.ColumnContact>
          </S.Columns>
        </S.TopSection>

        <S.BottomBar>© 2026 Digital Store</S.BottomBar>
      </S.FooterContainer>
    </S.FooterBackground>
  );
};

export default Footer;