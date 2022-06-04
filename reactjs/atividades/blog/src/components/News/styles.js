import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 10px 10px 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  height: 118px;
  width: 164px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 0px 10px;
`;

const Title = styled.span`
  font-size: larger;
  margin: 15px 0px 15px 0px;
`;

const SubTitle = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const PublishedAt = styled.span`
  color: lightgray;
`;

export { Container, Image, Content, Title, SubTitle, PublishedAt };
