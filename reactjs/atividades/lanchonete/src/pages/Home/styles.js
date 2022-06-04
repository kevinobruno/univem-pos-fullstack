import styled from 'styled-components';

import styleProperties from '../../shared/styleProperties.json';

const MainPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${styleProperties.primaryColor};
  width: 100vw;
  height: 100vh;
  color: ${styleProperties.primaryDarkColor};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 10px;
  font-size: larger;
  * {
    margin: 5px;
  }
  & h1 {
    text-align: center;
  }
  & input {
    font-size: larger;
    background: transparent;
    border-width: 0 0 1px;
    border-bottom: solid ${styleProperties.primaryDarkColor};
    color: ${styleProperties.primaryDarkColor};
  }
  & input:focus {
    outline: none;
    border-bottom: solid ${styleProperties.secondaryColor};
  }
  & button {
    font-size: larger;
    color: ${styleProperties.primaryColor};
    background: ${styleProperties.primaryDarkColor};
    border-radius: 5px;
    border: none;
  }
  & button:hover {
    color: ${styleProperties.lightColor};
  }
`;

export { MainPannel, FormContainer };
