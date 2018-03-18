import React from 'react';

import { StyledHome } from './Home-styled';

import Hero, { HeroBody, HeroActions } from '../Hero';
import ProjectSection from '../ProjectSection';
import SkillChart from '../SkillChart';
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
          <Button secondary>My Projects</Button>
          <Button href="mailto:delmarlawson@gmail.com" target="_blank" inverted>
            Get In Touch
          </Button>
        </HeroActions>
      </Hero>

      <ProjectSection
        title="Some Stats"
        backgroundColor={ShowcaseTheme.palette.primary3}
        clipOffset={[15, 0, 100, 90]}
        feature={<SkillChart />}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo
        ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla maximus
        augue vitae nunc ultricies sodales.
      </ProjectSection>

      <ProjectSection
        title="Project 1"
        backgroundColor={ShowcaseTheme.palette.primary}
        clipOffset={[15, 0, 100, 90]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo
        ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla maximus
        augue vitae nunc ultricies sodales.
      </ProjectSection>
      <ProjectSection
        title="Project 2"
        backgroundColor={ShowcaseTheme.palette.white}
        color={ShowcaseTheme.palette.black}
        clipOffset={[0, 10, 100, 95]}
        direction="rtl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo
        ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla maximus
        augue vitae nunc ultricies sodales.
      </ProjectSection>
      <ProjectSection
        title="Project 3"
        backgroundColor={ShowcaseTheme.palette.secondary2}
        clipOffset={[0, 5, 100, 85]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo
        ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla maximus
        augue vitae nunc ultricies sodales.
      </ProjectSection>
    </StyledHome>
  );
};

export default Home;
