import styled from 'styled-components';

import COLORS from '../../consts/colors';

const Container = styled.div`
  background-color: ${COLORS.LIGHT};
  border-radius: 10px;
  width: 500px;
`;

const Card = styled.div`
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  display: flex;
  padding: 10px;
  font-size: x-large;
  font-weight: bold;
`;

const Header = styled(Card)`
  border-radius: 10px 10px 0px 0px;
`;

const Footer = styled(Card)`
  border-radius: 0px 0px 10px 10px;
  justify-content: flex-end;
  font-style: italic;
`;

export { Container, Header, Footer };
