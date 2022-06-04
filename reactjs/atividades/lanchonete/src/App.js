import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

import { UserContextProvider } from './contexts/UserContext';
import { CartContextProvider } from './contexts/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Menu />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
