import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NewsContextProvider } from './contexts/NewsContext';
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NavBarItem from './components/NavBarItem';

import theme from './themes';

const App = () => {
  return (
    <NewsContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar
            title="Meu Blog"
            logoImage={require('./img/logo.png')}
          >
            <NavBarItem title="Início" to="/" />
            <NavBarItem title="Sobre" to="/sobre" />
          </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </NewsContextProvider>
  );
};

export default App;
