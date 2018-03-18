import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledProjectSection,
  StyledProjectSectionContent,
  StyledProjectSectionTitle,
  StyledProjectSectionBody,
  StyledProjectSectionFeature
} from './ProjectSection-styled';

const ProjectSection = ({
  children,
  title,
  feature,
  clipOffset,
  backgroundColor,
  direction,
  ...other
}) => {
  return (
    <StyledProjectSection
      clipOffset={clipOffset}
      backgroundColor={backgroundColor}
      direction={direction}
    >
      <StyledProjectSectionContent>
        <StyledProjectSectionTitle>{title}</StyledProjectSectionTitle>
        <StyledProjectSectionBody>{children}</StyledProjectSectionBody>
      </StyledProjectSectionContent>
      <StyledProjectSectionFeature>{feature}</StyledProjectSectionFeature>
    </StyledProjectSection>
  );
};

ProjectSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  feature: PropTypes.node,
  clipOffset: PropTypes.array,
  backgroundColor: PropTypes.string,
  direction: PropTypes.oneOf(['ltr', 'rtl'])
};

ProjectSection.defaultProps = {
  clipOffset: [0, 0, 100, 100],
  direction: 'ltr'
};

export default ProjectSection;
