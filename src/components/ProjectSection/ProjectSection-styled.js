import styled, { css } from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledProjectSection = styled.section`
  display: flex;
  padding: ${props => unitCalc(props.theme.spacing, 10, '*')}
    ${props => unitCalc(props.theme.spacing, 2, '*')}
    ${props => unitCalc(props.theme.spacing, 10, '*')};
  margin-top: -6rem;
  background-color: ${props => props.backgroundColor};
  clip-path: polygon(
    0% ${props => props.clipOffset[0]}%,
    100% ${props => props.clipOffset[1]}%,
    100% ${props => props.clipOffset[2]}%,
    0% ${props => props.clipOffset[3]}%
  );
  width: 100%;
  box-sizing: border-box;
  color: ${props => props.color};

  ${props =>
    props.direction === 'rtl' &&
    css`
      flex-direction: row-reverse;
      text-align: right;
    `};

  @media (max-width: ${props => props.theme.small}) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const StyledProjectSectionContent = styled.div`
  flex: 3 0 0px;
  padding: 0 ${props => unitCalc(props.theme.spacing, 2, '*')};

  @media (max-width: ${props => props.theme.small}) {
    flex: 1 0 0px;
  }
`;

const StyledProjectSectionTitle = styled.h2``;

const StyledProjectSectionBody = styled.div``;

const StyledProjectSectionFeature = styled.div`
  flex: 2 0 0px;
  padding: 0 ${props => unitCalc(props.theme.spacing, 2, '*')};
  min-height: 400px;
`;

export {
  StyledProjectSection,
  StyledProjectSectionContent,
  StyledProjectSectionTitle,
  StyledProjectSectionBody,
  StyledProjectSectionFeature
};
