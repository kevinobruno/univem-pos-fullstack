import { NavBarLink } from './styles';

const NavBarItem = ({ title, to }) => {
  return (
    <li>
      <NavBarLink to={to}>{title}</NavBarLink>
    </li>
  );
};

export default NavBarItem;
