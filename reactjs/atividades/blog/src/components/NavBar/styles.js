import styled from 'styled-components';

const MainNavBar = styled.nav`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 64px;
`;

const Logo = styled.img`
  height: 64px;
  width: 64px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.dark};
  padding-left: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export { MainNavBar, Logo, Title, List };
