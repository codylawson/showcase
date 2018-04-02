import PropTypes from 'prop-types';
import React from 'react';
import { StyledLessonSection } from './LessonSection-styled';

const LessonSection = ({
  children,
  title,
  backgroundColor,
  color,
  ...other
}) => {
  return (
    <StyledLessonSection backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledLessonSection>
  );
};

LessonSection.propTypes = {
  children: PropTypes.node
};

LessonSection.defaultProps = {};

export default LessonSection;
