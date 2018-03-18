import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledHero = styled.section`
  width: 100%;
  padding: ${props => unitCalc(props.theme.spacing, 12, '*')} 0
    ${props => unitCalc(props.theme.spacing, 22, '*')};
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);

  @media (max-width: ${props => props.theme.small}) {
    padding: ${props => unitCalc(props.theme.spacing, 5, '*')} 0
      ${props => unitCalc(props.theme.spacing, 15, '*')};
  }
`;

const StyledHeroContent = styled.div`
  max-width: ${props => props.theme.large};
  margin: 0 auto;
  padding: 0 ${props => unitCalc(props.theme.spacing, 3, '*')};
  box-sizing: border-box;
  text-align: center;

  @media (max-width: ${props => props.theme.small}) {
    padding: 0 ${props => unitCalc(props.theme.spacing, 1.5, '*')};
  }
`;

const StyledHeroTitle = styled.h2`
  font-weight: 800;
`;

const StyledHeroSubtitle = styled.h3``;

const StyledHeroBody = styled.div`
  margin: 0 auto;
`;

const StyledHeroActions = styled.div``;

export {
  StyledHero,
  StyledHeroContent,
  StyledHeroTitle,
  StyledHeroSubtitle,
  StyledHeroBody,
  StyledHeroActions
};
