import { useNavigate } from 'react-router-dom';

import { MainPannel, FormContainer } from './styles';

import { useUserContext } from '../../contexts/UserContext';

const Home = () => {
  const navigate = useNavigate();
  const { name, setName, balance, setBalance } = useUserContext();

  return (
    <MainPannel>
      <FormContainer>
        <h1>Insira os dados para iniciar a seção</h1>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Saldo</label>
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <button
          onClick={() => {
            navigate('/cardapio');
          }}
        >
          Avançar
        </button>
      </FormContainer>
    </MainPannel>
  );
};

export default Home;
