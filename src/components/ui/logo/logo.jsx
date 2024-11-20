import logoUrl from '/src/assets/logo.svg';
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <img src={logoUrl} alt="Logo" width="44" height="44" />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <img src={logoUrl} alt="Logo" width="44" height="44" />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;