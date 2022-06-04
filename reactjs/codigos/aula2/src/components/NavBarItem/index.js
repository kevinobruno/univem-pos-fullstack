import { Link } from 'react-router-dom';

const NavBarItem = ({ title, href, to }) => {
  return (
    <li>
      {to && <Link to={to}>{title}</Link>}
      {href && <a href={href}>{title}</a>}
    </li>
  );
};

export default NavBarItem;
