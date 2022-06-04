import News from '../News';

const LastNews = ({ data }) => {
  return data.map((news) => (
    <News
      key={news.id}
      imageUrl={news.imageUrl}
      title={news.title}
      subTitle={news.subTitle}
      publishedAt={news.publishedAt}
    />
  ));
};

export default LastNews;
