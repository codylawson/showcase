import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { unitCalc } from '../../theme/utils';

const mobileClipPath = clipOffset => {
  return `
    clip-path: polygon(
      0% ${clipOffset[0] * 0.3}%,
      100% ${clipOffset[1] * 0.3}%,
      100% ${100 - (100 - clipOffset[2]) * 0.3}%,
      0% ${100 - (100 - clipOffset[3]) * 0.3}%
    );
  `;
};

const StyledProjectSection = styled.section`
  display: flex;
  padding: ${props => unitCalc(props.theme.spacing, 6, '*')}
    ${props => unitCalc(props.theme.spacing, 2, '*')}
    ${props => unitCalc(props.theme.spacing, 14, '*')};
  margin-top: -10rem;

  background: ${props => props.backgroundColor};

  ${props =>
    props.backgroundImage &&
    css`
      background: linear-gradient(
          to right,
          ${props => transparentize(0.15, props.backgroundColor)},
          ${props => transparentize(0.15, props.backgroundColor)}
        ),
        url(${props => props.backgroundImage}) no-repeat center center,
        linear-gradient(
          to right,
          ${props => props.backgroundColor},
          ${props => props.backgroundColor}
        );
      background-size: auto, contain, auto;
    `};

  clip-path: polygon(
    0% ${props => props.clipOffset[0]}%,
    100% ${props => props.clipOffset[1]}%,
    100% ${props => props.clipOffset[2]}%,
    0% ${props => props.clipOffset[3]}%
  );
  width: 100%;
  box-sizing: border-box;
  color: ${props => props.color};
  text-align: right;

  ${props =>
    props.direction === 'rtl' &&
    css`
      flex-direction: row-reverse;
      text-align: left;
    `};

  @media (max-width: ${props => props.theme.small}) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    text-align: justify;

    ${props => mobileClipPath(props.clipOffset)};

    ${props =>
      props.direction === 'rtl' &&
      css`
        text-align: justify;
      `};
  }
`;

const StyledProjectSectionContent = styled.div`
  flex: 3 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${props => unitCalc(props.theme.spacing, 2, '*')};

  @media (max-width: ${props => props.theme.small}) {
    display: block;
    flex: none;
    padding: 0;
  }
`;

const StyledProjectSectionTitle = styled.h2`
  font-weight: 300;
  opacity: 0.7;
`;

const StyledProjectSectionBody = styled.div``;

const StyledProjectSectionFeature = styled.div`
  flex: 2 0 0px;
  padding: 0 ${props => unitCalc(props.theme.spacing, 2, '*')};
  min-height: 400px;

  @media (max-width: ${props => props.theme.small}) {
    padding: 0;
    position: relative;
    min-height: 80vw;
    min-height: calc(100vw - 4em);

    .recharts-responsive-container {
      position: absolute;
    }
  }
`;

export {
  StyledProjectSection,
  StyledProjectSectionContent,
  StyledProjectSectionTitle,
  StyledProjectSectionBody,
  StyledProjectSectionFeature
};
