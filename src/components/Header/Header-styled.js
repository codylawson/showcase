import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${props => unitCalc(props.theme.spacing, 2, '/')}
    ${props => unitCalc(props.theme.spacing, 2, '*')};
  box-sizing: border-box;
`;

const StyledHeaderBrand = styled.h1`
  line-height: 0;
`;

const StyledHeaderNav = styled.nav`
  display: flex;

  a {
    text-decoration: none;
  }
`;

const StyledHeaderLink = styled.a`
  color: ${props => props.theme.palette.white};
`;

export { StyledHeader, StyledHeaderBrand, StyledHeaderNav, StyledHeaderLink };
