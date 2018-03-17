import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledHero = styled.section`
  width: 100%;
  padding: ${props => unitCalc(props.theme.spacing, 8, '*')} 0
    ${props => unitCalc(props.theme.spacing, 12, '*')};
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
`;

const StyledHeroContent = styled.div`
  max-width: ${props => props.theme.large};
  margin: 0 auto;
  padding: 0 ${props => unitCalc(props.theme.spacing, 3, '*')};
  box-sizing: border-box;
  text-align: center;
`;

const StyledHeroTitle = styled.h2``;
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
