import styled from 'styled-components';
import { unitCalc } from './theme/utils';

const StyledApp = styled.div`
  padding-top: ${props => unitCalc(props.theme.spacing, 4, '*')};
  color: ${props => props.theme.palette.white};
`;

export { StyledApp };
