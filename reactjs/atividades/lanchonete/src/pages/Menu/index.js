import { Link } from 'react-router-dom';

import { MainContainer } from './styles';

import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import products from '../../shared/mock/products.json';

const Menu = () => {
  return (
    <>
      <NavBar title="Larika" logo={require('../../img/ham-ico.png')}>
        <Link to="/">Início</Link>
        <Link to="/cardapio">Cardápio</Link>
      </NavBar>
      <MainContainer>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </MainContainer>
    </>
  );
};

export default Menu;
