import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NavBarItem from './components/NavBarItem';

import logoImage from './img/ham-ico.png';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar logoImage={logoImage} title="Foo">
        <NavBarItem title="Início" to="/" />
        <NavBarItem title="Hot Dog" to="/hotdog" />
        <NavBarItem title="Sobre" to="/sobre" />
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
