import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledTechnologySection,
  StyledTechnologyGraphic,
  StyledTechnologyContent,
  StyledTechnologyTitle,
  StyledTechnologyDescription
} from './TechnologySection-styled';

const TechnologySection = ({ children, graphic, title, ...other }) => {
  return (
    <StyledTechnologySection>
      <StyledTechnologyGraphic src={graphic} />
      <StyledTechnologyContent>
        <StyledTechnologyTitle>{title}</StyledTechnologyTitle>
        <StyledTechnologyDescription>{children}</StyledTechnologyDescription>
      </StyledTechnologyContent>
    </StyledTechnologySection>
  );
};

TechnologySection.propTypes = {
  children: PropTypes.node
};

TechnologySection.defaultProps = {};

export default TechnologySection;
