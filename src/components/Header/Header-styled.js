import styled, { css } from 'styled-components';
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
  font-size: 1.8rem;
`;

const StyledHeaderNav = styled.nav`
  display: flex;

  a {
    text-decoration: none;
  }
`;

const _getHeaderLinkActive = props => {
  return `
    background: ${props.theme.palette.white};
    color: ${props.theme.palette.primary3};

    &:hover {
      color: ${props.theme.palette.primary3};
    }
  `;
};

const StyledHeaderLink = styled.a`
  color: ${props => props.theme.palette.lightGray};
  padding: 0 ${props => props.theme.spacing};
  margin: 0 ${props => unitCalc(props.theme.spacing, 3, '/')};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
  line-height: 2rem;

  .mdi-icon {
    margin-left: ${props => unitCalc(props.theme.spacing, 3, '/')};
    fill: currentColor;
  }

  &:hover {
    color: ${props => props.theme.palette.white};
  }

  .active & {
    ${props => _getHeaderLinkActive(props)};
  }

  ${props =>
    props.active &&
    css`
      ${props => _getHeaderLinkActive(props)};
    `};
`;

export { StyledHeader, StyledHeaderBrand, StyledHeaderNav, StyledHeaderLink };
