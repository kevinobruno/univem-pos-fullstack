import styled from 'styled-components';

import styleProperties from '../../shared/styleProperties.json';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  background-color: ${styleProperties.primaryColor};
  & h1 {
    color: ${styleProperties.darkColor};
    padding-left: 10px;
  }
  & ul {
    list-style: none;
    display: flex;
  }
  & ul li a,
  ul li a:visited,
  ul li a:link {
    color: ${styleProperties.primaryDarkColor};
    padding: 10px;
    font-weight: bolder;
    text-decoration: none;
  }
  & ul li a:hover {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: ${styleProperties.secondaryColor};
  }
`;

const ShoppingCart = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 10px;
  & img {
    height: 32px;
  }
  & span {
    height: 25px;
    width: 25px;
    background-color: ${styleProperties.lightColor};
    border-radius: 50%;
    text-align: center;
    color: ${styleProperties.primaryDarkColor};
    font-weight: bold;
  }
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  border-left: 3px solid ${styleProperties.primaryDarkColor};
  padding: 5px;
  color: ${styleProperties.primaryDarkColor};
  font-weight: bolder;
  & :last-child {
    margin-left: auto;
  }
`;

export { Nav, ShoppingCart, UserProfile };
