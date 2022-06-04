import { createContext, useContext, useState } from 'react';
import { useUserContext } from '../UserContext';

const CartContext = createContext();
CartContext.displayName = 'Cart';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [paymentError, setPaymentError] = useState(undefined);

  return (
    <CartContext.Provider
      value={{ cart, paymentError, setCart, setPaymentError }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const { cart, paymentError, setCart, setPaymentError } =
    useContext(CartContext);

  const { balance, setBalance } = useUserContext();

  const addItem = (item) => {
    let cartItem = cart.find((i) => i.id === item.id);

    if (cartItem) {
      setCart([
        ...cart.filter((i) => i.id !== item.id),
        { ...cartItem, qtd: cartItem.qtd + 1 },
      ]);
    } else {
      setCart([...cart, { ...item, qtd: 1 }]);
    }
  };

  const removeItem = (itemId) => {
    let cartItem = cart.find((i) => i.id === itemId);

    if (cartItem && cartItem.qtd > 0) {
      if (cartItem.qtd === 1) {
        setCart(cart.filter((i) => i.id !== itemId));
      } else {
        setCart([
          ...cart.filter((i) => i.id !== itemId),
          { ...cartItem, qtd: cartItem.qtd - 1 },
        ]);
      }
    }
  };

  const findItem = (itemId) => cart.find((i) => i.id === itemId);

  const pay = () => {
    let sum = 0;
    cart.map((i) => (sum += i.price * i.qtd));

    if (sum > balance) {
      setPaymentError(
        'Erro ao completar pagamento, verfique se você tem saldo suficiente para a operação.',
      );
      return;
    }

    setPaymentError(undefined);
    setBalance(balance - sum);
    setCart([]);
  };

  const sortedCart = cart.sort((a, b) => a.id - b.id);

  return {
    cart: sortedCart,
    addItem,
    removeItem,
    findItem,
    pay,
    setPaymentError,
    paymentError,
  };
};

export { CartContextProvider, useCartContext };
