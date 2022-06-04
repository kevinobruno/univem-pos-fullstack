import { MainNavBar, Logo, Title, List } from './styles';

const NavBar = ({ children, logoImage, title }) => {
  return (
    <MainNavBar>
      <Logo src={logoImage} alt="logo" />
      <Title>{title}</Title>
      <List>{children}</List>
    </MainNavBar>
  );
};

export default NavBar;
