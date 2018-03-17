import React from 'react';

import { StyledHome } from './Home-styled';

import Hero, { HeroBody, HeroActions } from '../Hero';
import Button from '../common/Button';

import ShowcaseTheme from '../../theme/ShowcaseTheme';

const Home = props => {
  return (
    <StyledHome>
      <Hero
        title="Hello!"
        style={{
          background: ShowcaseTheme.palette.white,
          color: ShowcaseTheme.palette.black
        }}
      >
        <HeroBody style={{ maxWidth: '800px', fontSize: '1.3rem' }}>
          <p>
            My name is Cody Lawson, I’m a <strong>UI/UX Designer</strong> and{' '}
            <strong>Front-End Developer</strong> with over{' '}
            <strong>5 years of experience</strong> creating beautiful and easy
            to use <strong>applications for the web</strong>. I love data
            visualization and creating animations that tell a story as well as
            inform.
          </p>
        </HeroBody>
        <HeroActions>
          <Button secondary>Check Out My Work</Button>
          <Button href="mailto:delmarlawson@gmail.com" target="_blank" inverted>
            Get In Touch
          </Button>
        </HeroActions>
      </Hero>
    </StyledHome>
  );
};

export default Home;
