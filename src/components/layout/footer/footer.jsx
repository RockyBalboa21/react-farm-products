import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

// подвал сайта
function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создал в 2024 Александр Герасимов</Copyright>
    </StyledSection>
  );
}

export default Footer;
