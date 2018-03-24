import styled, { css } from 'styled-components';
import { unitCalc } from '../../../theme/utils';

const StyledButton = styled.a`
  color: ${props => props.theme.palette.lightGray};
  padding: ${props => unitCalc(props.theme.spacing, 4, '/')}
    ${props => props.theme.spacing};
  margin: 0 ${props => unitCalc(props.theme.spacing, 3, '/')};
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${props => unitCalc(props.theme.spacing, 2, '*')};
  line-height: ${props => unitCalc(props.theme.spacing, 2, '*')};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);

  .mdi-icon {
    margin-left: ${props => unitCalc(props.theme.spacing, 3, '/')};
    fill: currentColor;
  }

  &:hover {
    color: ${props => props.theme.palette.white};
  }

  ${props =>
    props.primary &&
    css`
      background: ${props.theme.palette.primary};
      color: ${props.theme.palette.white};
      box-shadow: 0 3px 5px 2px rgba(55, 205, 235, 0.3);

      &:hover {
        background: ${props.theme.palette.primary2};
      }

      a {
        text-decoration: none;
        color: currentColor;
        font-weight: 400;
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${props.theme.gradients.secondary};
      color: ${props.theme.palette.white};
      box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.15);

      &:hover {
        background: ${props.theme.gradients.secondary2};
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
      }

      a {
        text-decoration: none;
        color: currentColor;
      }
    `};

  ${props =>
    props.inverted &&
    css`
      color: ${props.theme.palette.primary};

      &:hover {
        color: ${props.theme.palette.primary2};
        background: ${props.theme.palette.lighterGray};
      }

      a {
        text-decoration: none;
        color: currentColor;
      }
    `};

  ${props =>
    props.whitePrimary &&
    css`
      background: ${props.theme.palette.white};
      color: ${props.theme.palette.primary};
      font-weight: 400;
      box-shadow: 0 3px 5px 2px ${props => props.theme.palette.primary2};
      opacity: 0.9;
      transition: opacity 175ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        opacity: 1;
        color: ${props.theme.palette.primary};
        box-shadow: 0 3px 7px 3px ${props => props.theme.palette.primary2};
      }

      a {
        text-decoration: none;
        color: currentColor;
      }
    `};

  ${props =>
    props.whiteSecondary &&
    css`
      background: ${props.theme.palette.white};
      color: ${props.theme.palette.secondary};
      font-weight: 400;
      box-shadow: 0 3px 5px 2px ${props => props.theme.palette.secondary3};
      opacity: 0.9;
      transition: opacity 175ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        opacity: 1;
        color: ${props.theme.palette.secondary};
        box-shadow: 0 3px 7px 3px ${props => props.theme.palette.secondary3};
      }

      a {
        text-decoration: none;
        color: currentColor;
      }
    `};
`;

export { StyledButton };
