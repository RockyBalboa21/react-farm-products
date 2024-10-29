import logoUrl from '/src/assets/logo.svg';
import { Text, StyledLogo } from './styles';

const Logo = () => (
  <StyledLogo href="/">
    <img src={logoUrl} alt="Logo" width="44" height="44" />
    <Text>Фермерские продукты</Text>
  </StyledLogo>
);

export default Logo;

