import styled, { css } from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing}
    ${props => unitCalc(props.theme.spacing, 2, '*')};
  box-sizing: border-box;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${props =>
    props.scrolled &&
    css`
      background: ${props.theme.palette.transparentWhite};
      border-bottom-color: ${props.theme.palette.lightGray};
    `};
`;

const StyledHeaderBrand = styled.h1`
  line-height: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.palette.black};
`;

const StyledHeaderNav = styled.nav`
  display: flex;

  a {
    text-decoration: none;
  }
`;

const _getHeaderLinkActive = props => {
  return `
    background: ${props.theme.gradients.primary};
    color: ${props.theme.palette.white};

    &:hover {
      background: ${props.theme.gradients.primary2};
    }
  `;
};

const StyledHeaderLink = styled.a`
  color: ${props => props.theme.palette.darkerGray};
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
    color: ${props => props.theme.palette.black};
  }

  ${props =>
    props.iconButton &&
    css`
      width: 2rem;
      height: 2rem;
      box-sizing: border-box;
      padding: 0;
      align-items: center;
      justify-content: center;

      .mdi-icon {
        margin-left: 0;
      }

      ${props.active &&
        css`
          &:hover {
            color: ${props.theme.palette.white};
          }
        `};
    `};

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
