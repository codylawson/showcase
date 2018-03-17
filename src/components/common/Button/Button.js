import React from 'react';

import { StyledButton } from './Button-styled';

const Button = ({ children, ...other }) => {
  return <StyledButton {...other}>{children}</StyledButton>;
};

export default Button;
