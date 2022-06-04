import styled from 'styled-components';

import styleProperties from '../../shared/styleProperties.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${styleProperties.primaryColor};
  border-radius: 10px 10px 0 0;
  padding: 5px;
  font-weight: bolder;
  color: ${styleProperties.secondaryColor};
  font-size: x-large;
  & img {
    height: 32px;
    border-radius: 10px;
  }
  & div {
    display: flex;
    width: 125px;
    align-items: center;
    margin-left: auto;
    padding-right: 10px;
    justify-content: space-between;
  }
  & span {
    height: 32px;
    width: 40px;
    background-color: ${styleProperties.lightColor};
    border-radius: 25%;
    text-align: center;
    color: ${styleProperties.primaryDarkColor};
    font-weight: bold;
  }
  & button {
    border-radius: 50%;
    background-color: transparent;
    border: none;
    font-size: large;
    font-weight: bolder;
    width: 32px;
    height: 32px;
    color: ${styleProperties.primaryDarkColor};
  }
  & button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  & button:active {
    color: ${styleProperties.secondaryColor};
  }
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${styleProperties.primaryColor};
  & img {
    max-width: 50%;
  }
  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: auto 0;
    color: ${styleProperties.darkColor};
    font-weight: bolder;
  }
`;

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${styleProperties.primaryColor};
  border-radius: 0 0 10px 10px;
  padding: 5px;
  font-weight: bolder;
  color: ${styleProperties.secondaryColor};
  font-style: italic;
`;

export { Container, ContainerHeader, ContainerMain, ContainerFooter };
