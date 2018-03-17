import React from 'react';

import { StyledHeroBody } from './Hero-styled';

const HeroBody = ({ children, ...other }) => {
  return <StyledHeroBody {...other}>{children}</StyledHeroBody>;
};

export default HeroBody;
