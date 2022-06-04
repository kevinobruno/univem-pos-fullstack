import { Container, Header, Footer } from './styles';

const CardStyled = ({ children, title, price }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <div>{children}</div>
      <Footer>{price}</Footer>
    </Container>
  );
};

export default CardStyled;
