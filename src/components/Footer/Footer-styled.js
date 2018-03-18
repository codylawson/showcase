import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledFooter = styled.div`
  width: 100%;
  margin-top: -8rem;
  padding: ${props => unitCalc(props.theme.spacing, 4, '*')}
    ${props => unitCalc(props.theme.spacing, 0, '*')}
    ${props => unitCalc(props.theme.spacing, 3, '*')};
  box-sizing: border-box;
  text-align: center;
  font-weight: 300;
  background-color: ${props => props.theme.palette.primary3};
  color: ${props => props.theme.palette.gray};
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%);
`;

const StyledFooterTitle = styled.h4`
  margin: ${props => unitCalc(props.theme.spacing, 2, '/')} 0;
  padding-bottom: ${props => props.theme.spacing};
  border-bottom: 1px solid ${props => props.theme.palette.darkerGray};
  display: inline-block;
`;

const StyledFooterActions = styled.div``;

export { StyledFooter, StyledFooterTitle, StyledFooterActions };
