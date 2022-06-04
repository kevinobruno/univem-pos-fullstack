import News from '../News';

import { Container } from './styles';

const RightSideNews = ({ data }) => {
  return (
    <Container>
      {data.map((news) => (
        <News
          key={news.id}
          imageUrl={news.imageUrl}
          title={news.title}
          subTitle={news.subTitle}
          publishedAt={news.publishedAt}
        />
      ))}
    </Container>
  );
};

export default RightSideNews;
