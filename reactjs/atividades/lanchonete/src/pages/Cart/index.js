import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer, Sumary, ErrorMessage, PayButton } from './styles';

import NavBar from '../../components/NavBar';
import ProductLine from '../../components/ProductLine';
import { useCartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, pay, paymentError, setPaymentError } = useCartContext();

  useEffect(() => {
    setPaymentError(undefined);
  }, []);

  let sum = 0;
  cart.map((i) => (sum += i.price * i.qtd));

  return (
    <>
      <NavBar title="Larika" logo={require('../../img/ham-ico.png')}>
        <Link to="/">Início</Link>
        <Link to="/cardapio">Cardápio</Link>
      </NavBar>
      <MainContainer>
        <h1>Carrinho de Compras</h1>
        {cart.map((product) => (
          <ProductLine {...product} key={product.id} />
        ))}
        <Sumary>
          Total
          <span>R$ {Number.parseFloat(sum).toFixed(2)}</span>
        </Sumary>
        {paymentError && <ErrorMessage>{paymentError}</ErrorMessage>}
        <PayButton onClick={pay}>Pagar</PayButton>
      </MainContainer>
    </>
  );
};

export default Cart;
