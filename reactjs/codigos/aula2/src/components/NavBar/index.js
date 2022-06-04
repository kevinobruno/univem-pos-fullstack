import './styles.css';

const NavBar = ({ children, logoImage, title }) => {
  return (
    <nav className="navbar">
      <img src={logoImage} alt="logo" />
      <h1>{title}</h1>
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;
