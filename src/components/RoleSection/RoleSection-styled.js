import styled from 'styled-components';
import { unitCalc } from '../../theme/utils';

const StyledRoleSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${props => props.theme.small}) {
    flex-wrap: wrap;
  }
`;

const StyledRoleSection = styled.div`
  text-align: center;
  margin: ${props => props.theme.spacing};
  max-width: 200px;

  @media (max-width: ${props => props.theme.small}) {
    margin: ${props => unitCalc(props.theme.spacing, 2, '/')};
    max-width: 150px;
  }
`;

const StyledRoleGraphic = styled.img`
  width: 100%;

  @media (max-width: ${props => props.theme.small}) {
    width: 100px;
  }
`;

const StyledRoleTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  @media (max-width: ${props => props.theme.small}) {
    margin-top: 0.5rem;
  }
`;

const StyledRoleDescription = styled.p`
  font-weight: 300;
  opacity: 0.7;
`;

export {
  StyledRoleSectionContainer,
  StyledRoleSection,
  StyledRoleGraphic,
  StyledRoleTitle,
  StyledRoleDescription
};
