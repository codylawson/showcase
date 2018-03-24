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
  backgroundImage,
  color,
  direction,
  id,
  ...other
}) => {
  return (
    <StyledProjectSection
      clipOffset={clipOffset}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      color={color}
      direction={direction}
      id={id}
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
  backgroundImage: PropTypes.node,
  color: PropTypes.string,
  direction: PropTypes.oneOf(['ltr', 'rtl'])
};

ProjectSection.defaultProps = {
  clipOffset: [0, 0, 100, 100],
  direction: 'ltr'
};

export default ProjectSection;
