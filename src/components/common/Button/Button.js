import React from 'react';

import { StyledButton } from './Button-styled';

const Button = ({ children, withComponent, ...other }) => {
  if (withComponent) {
    const CustomButton = StyledButton.withComponent(withComponent);
    return <CustomButton {...other}>{children}</CustomButton>;
  }

  return <StyledButton {...other}>{children}</StyledButton>;
};

export default Button;
