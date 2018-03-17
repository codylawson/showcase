import styled, { injectGlobal } from 'styled-components';
import { unitCalc } from '../../../theme/utils';

const StyledPopover = styled.div`
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);

  &[data-placement^='top'] {
    margin-bottom: 5px;
  }
  &[data-placement^='bottom'] {
    margin-top: 5px;
  }
  &[data-placement^='right'] {
    margin-left: 5px;
  }
  &[data-placement^='left'] {
    margin-right: 5px;
  }

  &[data-x-out-of-boundaries] {
    display: none;
  }
`;

const StyledPopperTransition = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1,
    pointerEvents: 'auto'
  }
};

const StyledPopoverMenu = styled.div`
  background-color: ${props => props.theme.palette.white};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.boxShadow.z4};
  overflow: hidden;
  padding: ${props => unitCalc(props.theme.spacing, 2, '/')} 0;
`;

const StyledPopoverMenuItem = styled.div`
  padding: ${props => unitCalc(props.theme.spacing, 1.5, '/')}
    ${props => unitCalc(props.theme.spacing, 1.5, '*')};
  border-left: 4px solid;
  border-left-color: transparent;
  border-right: 4px solid transparent;
  color: ${props => props.theme.palette.primary3};

  &:hover {
    background: ${props => props.theme.palette.lighterGray};
  }

  .active & {
    border-left-color: ${props => props.theme.palette.primary};
  }
`;

injectGlobal`
  .popper {
    background: #222;
    color: white;
    width: 150px;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding: 5px;
  }

  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .popper[data-placement^="top"] {
    margin-bottom: 5px;
  }

  .popper[data-placement^="top"] .popper__arrow {
    border-width: 5px 5px 0 5px;
    border-color: #222 transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .popper[data-placement^="bottom"] {
    margin-top: 5px;
  }

  .popper[data-placement^="bottom"] .popper__arrow {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #222 transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .popper[data-placement^="right"] {
    margin-left: 5px;
  }

  .popper[data-placement^="right"] .popper__arrow {
    border-width: 5px 5px 5px 0;
    border-color: transparent #222 transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .popper[data-placement^="left"] {
    margin-right: 5px;
  }

  .popper[data-placement^="left"] .popper__arrow {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #222;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .popper[data-x-out-of-boundaries] {
      display: none;
  }
`;

export {
  StyledPopover,
  StyledPopperTransition,
  StyledPopoverMenu,
  StyledPopoverMenuItem
};
