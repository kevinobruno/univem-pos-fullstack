import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

const Image = styled.img`
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: xx-large;
  font-weight: bolder;
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

export { Container, Image, Title, SubTitle };
