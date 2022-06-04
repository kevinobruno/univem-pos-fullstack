import Card from '../../components/Card';
import CardStyled from '../../components/CardStyled';
import TextInput from '../../components/TextInput';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <TextInput name="foo" value="Bar" />
      <Card title="Dogão" price="R$ 9,90">
        Conteúdo
      </Card>
      <CardStyled title="Super Dogão" price="R$ 19,90">
        Conteúdo
      </CardStyled>
    </Container>
  );
};

export default Home;
