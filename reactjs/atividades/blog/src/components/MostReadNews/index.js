import News from '../News';

import { Container } from './styles';

const MostReadNews = ({ data }) => {
  return (
    <Container>
      <div>
        {data.slice(0, 3).map((news) => (
          <News
            key={news.id}
            imageUrl={news.imageUrl}
            title={news.title}
            publishedAt={news.publishedAt}
          />
        ))}
      </div>
      <div>
        {data.slice(3, 6).map((news) => (
          <News
            key={news.id}
            imageUrl={news.imageUrl}
            title={news.title}
            publishedAt={news.publishedAt}
          />
        ))}
      </div>
    </Container>
  );
};

export default MostReadNews;
