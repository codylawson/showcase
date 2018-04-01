import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledRoleSection,
  StyledRoleGraphic,
  StyledRoleTitle,
  StyledRoleDescription
} from './RoleSection-styled';

const RoleSection = ({ children, graphic, title, ...other }) => {
  return (
    <StyledRoleSection>
      <StyledRoleGraphic src={graphic} />
      <StyledRoleTitle>{title}</StyledRoleTitle>
      <StyledRoleDescription>{children}</StyledRoleDescription>
    </StyledRoleSection>
  );
};

RoleSection.propTypes = {
  children: PropTypes.node
};

RoleSection.defaultProps = {};

export default RoleSection;
