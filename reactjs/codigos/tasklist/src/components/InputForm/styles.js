import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 75%;
  margin: auto;
`;

const Input = styled.input`
  border-radius: 10px;
  flex-grow: 4;
  font-size: larger;
`;

const Button = styled.button`
  border-radius: 10px;
  flex-grow: 1;
  font-size: large;
  font-weight: bolder;
`;

const SaveButton = styled(Button)`
  background-color: #b5d867;
  color: #422424;
`;

const CleanButton = styled(Button)`
  background-color: #d16666;
  color: #422424;
`;

export { Container, Input, SaveButton, CleanButton };
