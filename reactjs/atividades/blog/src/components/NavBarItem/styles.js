import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarLink = styled(Link)`
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bolder;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    color: ${props => props.theme.colors.secondary};
  }
`;

export { NavBarLink };
