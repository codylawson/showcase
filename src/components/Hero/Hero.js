import React from 'react';

import {
  StyledHero,
  StyledHeroContent,
  StyledHeroTitle,
  StyledHeroSubtitle
} from './Hero-styled';

const Hero = ({ children, title, subtitle, ...other }) => {
  let titleEl;
  if (title) {
    titleEl = <StyledHeroTitle>{title}</StyledHeroTitle>;
  }

  let subtitleEl;
  if (subtitle) {
    subtitleEl = <StyledHeroSubtitle>{subtitle}</StyledHeroSubtitle>;
  }

  return (
    <StyledHero {...other}>
      <StyledHeroContent>
        {titleEl}
        {subtitleEl}
        {children}
      </StyledHeroContent>
    </StyledHero>
  );
};

export default Hero;
