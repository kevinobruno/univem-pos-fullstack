import styled from 'styled-components';

import styleProperties from '../../shared/styleProperties.json';

const LineContainer = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${styleProperties.lightColor};
  border: 2px solid ${styleProperties.primaryDarkColor};
  border-radius: 10px;
  padding: 5px;
  font-weight: bolder;
  color: ${styleProperties.primaryDarkColor};
  & img {
    height: 32px;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

const ItemDefinition = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;

const ItemValues = styled.div`
  align-items: center;
  margin-left: auto;
  & span {
    margin-left: 20px;
  }
`;

const ItemController = styled.div`
  display: flex;
  width: 125px;
  align-items: center;
  margin-left: auto;
  padding-right: 10px;
  justify-content: space-between;
  & span {
    text-align: center;
    color: ${styleProperties.primaryDarkColor};
    font-weight: bolder;
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

export { LineContainer, ItemDefinition, ItemValues, ItemController };
