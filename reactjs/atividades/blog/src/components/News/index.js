import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
  PublishedAt,
} from './styles';

const News = ({ imageUrl, subTitle, title, publishedAt }) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <Content>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Title>{title}</Title>
        {publishedAt && <PublishedAt>{publishedAt}</PublishedAt>}
      </Content>
    </Container>
  );
};

export default News;
