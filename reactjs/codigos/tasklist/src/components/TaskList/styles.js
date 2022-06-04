import styled from 'styled-components';

const Container = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 10px auto;
  width: 75%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row-reverse;

  & span {
    margin-right: auto;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  font-weight: bolder;
  margin-left: 10px;
`;

const DeleteButton = styled(Button)`
  background-color: red;
`;

const EditButton = styled(Button)`
  background-color: yellow;
`;

export { Container, ListItem, DeleteButton, EditButton };
