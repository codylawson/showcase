import React from 'react';

import { StyledHeroActions } from './Hero-styled';

const HeroActions = props => {
  return <StyledHeroActions>{props.children}</StyledHeroActions>;
};

export default HeroActions;
