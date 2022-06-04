import { createContext, useContext, useState } from 'react';

import mainNewsMock from '../../shared/mocks/main-news.json';
import rightSideNewsMock from '../../shared/mocks/right-side-news.json';
import mostReadNewsMock from '../../shared/mocks/most-read-news.json';
import lastNewsMock from '../../shared/mocks/last-news.json';

const NewsContext = createContext();
NewsContext.displayName = 'News';

const NewsContextProvider = ({ children }) => {
  const [mainNews, setMainNews] = useState(mainNewsMock);
  const [rightSideNews, setRightSideNews] = useState(rightSideNewsMock);
  const [mostReadNews, setMostReadNews] = useState(mostReadNewsMock);
  const [lastNews, setLastNews] = useState(lastNewsMock);

  return (
    <NewsContext.Provider
      value={{
        mainNews,
        rightSideNews,
        mostReadNews,
        lastNews,
        setMainNews,
        setRightSideNews,
        setMostReadNews,
        setLastNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

const useNextContext = () => {
  const {
    mainNews,
    rightSideNews,
    mostReadNews,
    lastNews,
    setMainNews,
    setRightSideNews,
    setMostReadNews,
    setLastNews,
  } = useContext(NewsContext);

  return {
    mainNews,
    rightSideNews,
    mostReadNews,
    lastNews,
    setMainNews,
    setRightSideNews,
    setMostReadNews,
    setLastNews,
  };
};

export { NewsContextProvider, useNextContext };
