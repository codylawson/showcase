import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledFooter = styled.div`
  width: 100%;
  padding: ${props => unitCalc(props.theme.spacing, 2, '*')} 0;
  box-sizing: border-box;
  text-align: center;
  font-weight: 300;
  color: ${props => props.theme.palette.gray};
`;

const StyledFooterTitle = styled.h4`
  margin: ${props => unitCalc(props.theme.spacing, 2, '/')} 0;
  padding-bottom: ${props => props.theme.spacing};
  border-bottom: 1px solid ${props => props.theme.palette.darkerGray};
  display: inline-block;
`;

const StyledFooterActions = styled.div``;

export { StyledFooter, StyledFooterTitle, StyledFooterActions };
