import styled from 'styled-components';

const StyledTechnologySectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTechnologySection = styled.div`
  display: flex;
  flex: 1 0 200px;
  text-align: left;
  margin: ${props => props.theme.spacing};
`;

const StyledTechnologyGraphic = styled.img`
  flex: 0 0 50px;
  align-self: flex-start;
`;

const StyledTechnologyContent = styled.div`
  flex: 1 0 50px;
  padding-left: 1rem;
`;

const StyledTechnologyTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 50px;
  margin: 0;
`;

const StyledTechnologyDescription = styled.p`
  font-weight: 300;
  opacity: 0.7;
  margin: 0;
`;

export {
  StyledTechnologySectionContainer,
  StyledTechnologySection,
  StyledTechnologyGraphic,
  StyledTechnologyContent,
  StyledTechnologyTitle,
  StyledTechnologyDescription
};
