import styled from 'styled-components';

import styleProperties from '../../shared/styleProperties.json';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60vw;
  padding: 10px;
  & h1 {
    text-align: center;
    color: ${styleProperties.primaryDarkColor};
  }
`;

const Sumary = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${styleProperties.lightColor};
  border: 2px solid ${styleProperties.primaryDarkColor};
  border-radius: 10px;
  padding: 5px;
  color: ${styleProperties.primaryDarkColor};
  font-weight: bolder;
  & span {
    margin-left: auto;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

const PayButton = styled.button`
  background-color: ${styleProperties.primaryColor};
  border-radius: 10px;
  font-weight: bolder;
  height: 50px;
  margin-top: 20px;
  padding: 5px;
`;

export { MainContainer, Sumary, ErrorMessage, PayButton };
