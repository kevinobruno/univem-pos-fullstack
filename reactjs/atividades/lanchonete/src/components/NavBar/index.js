import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, ShoppingCart, UserProfile } from './styles';

import { useUserContext } from '../../contexts/UserContext';
import { useCartContext } from '../../contexts/CartContext';

const NavBar = ({ logo, children, title }) => {
  const { name, balance } = useUserContext();
  const { cart } = useCartContext();

  let itemsCount = 0;
  cart.map((i) => (itemsCount += i.qtd));

  return (
    <Nav>
      {logo ? <img src={logo} alt="logo" /> : ''}
      <h1>{title}</h1>
      <ul>
        {React.Children.map(children, (child) => {
          return <li>{child}</li>;
        })}
      </ul>
      <ShoppingCart>
        <Link to="/carrinho">
          <img src={require('../../img/carrinho.png')} alt="Carrinho" />
        </Link>
        <span>{itemsCount}</span>
      </ShoppingCart>
      <UserProfile>
        <span>{name}</span>
        <span>R$ {Number.parseFloat(balance).toFixed(2)}</span>
      </UserProfile>
    </Nav>
  );
};

export default NavBar;
