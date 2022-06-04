import { Header, Feed } from './styles';

import { useNextContext } from '../../contexts/NewsContext';
import MainContainer from '../../components/MainContainer';
import MainNews from '../../components/MainNews';
import RightSideNews from '../../components/RightSideNews';
import MostReadNews from '../../components/MostReadNews';
import LastNews from '../../components/LastNews';

const Home = () => {
  const { mainNews, rightSideNews, mostReadNews, lastNews } = useNextContext();

  return (
    <MainContainer>
      <Header>
        <MainNews data={mainNews} />
        <RightSideNews data={rightSideNews} />
      </Header>
      <Feed>
        <div>
          <hr />
        </div>
        <h2>Mais lidas</h2>
        <MostReadNews data={mostReadNews} />
        <div>
          <hr />
        </div>
        <h2>Últimas notícias</h2>
        <LastNews data={lastNews} />
      </Feed>
    </MainContainer>
  );
};

export default Home;
