import styled from 'styled-components';

const StyledRoleSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledRoleSection = styled.div`
  text-align: center;
  margin: ${props => props.theme.spacing};
  max-width: 200px;
`;

const StyledRoleGraphic = styled.img`
  width: 100%;
`;

const StyledRoleTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
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
