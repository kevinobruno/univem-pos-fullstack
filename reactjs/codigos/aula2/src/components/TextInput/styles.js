import styled, { css } from 'styled-components';

import COLORS from '../../consts/colors';

const Input = styled.input`
  background-color: ${COLORS.PRIMARY};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.inputColor || 'white'};
  font-size: large;
  padding: 15px;

  ${(props) =>
    props.dark &&
    css`
      background-color: black;
      color: lightcyan;
    `}
`;

const BlueInput = styled(Input)`
  background-color: navy;
  color: cyan;
`;

export { Input, BlueInput };
