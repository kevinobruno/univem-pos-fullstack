import { Container, Image, Title, SubTitle } from './styles';

const MainNews = ({ data: { imageUrl, title, subTitle } }) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
    </Container>
  );
};

export default MainNews;
