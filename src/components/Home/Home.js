import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { StyledHome } from './Home-styled';

import Hero, { HeroBody, HeroActions } from '../Hero';
import ProjectSection from '../ProjectSection';
import SkillChart from '../SkillChart';
import Button from '../common/Button';

import FireReportingBg from '../images/FireReporting_Preview.png';
import FireReportingFeature from '../images/FireReporting_Feature.png';
import AgriculturalUnderwritingBg from '../images/AgriculturalUnderwriting_Preview.png';
import AgriculturalUnderwritingFeature from '../images/AgriculturalUnderwriting_Feature.png';
import ComponentLibraryBg from '../images/ComponentLibrary_Preview.png';
import ComponentLibraryFeature from '../images/ComponentLibrary_Feature.png';

import ShowcaseTheme from '../../theme/ShowcaseTheme';

const Home = props => {
  return (
    <StyledHome>
      <Hero
        title="Hello!"
        style={{
          background: ShowcaseTheme.palette.lightestGray,
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
          <Button secondary href="#FireReportings_Preview">
            My Projects
          </Button>
          <Button href="mailto:delmarlawson@gmail.com" target="_blank" inverted>
            Get In Touch
          </Button>
        </HeroActions>
      </Hero>

      <ProjectSection
        title="01. Experience And Skills"
        backgroundColor={ShowcaseTheme.palette.primary3}
        clipOffset={[15, 0, 85, 100]}
        feature={<SkillChart />}
      >
        <p>
          As a User Interface Engineer at Esri I worked on dozens of web
          applications for companies like Walmart, Shell, and PG&amp;E, as well
          as government agencies like the National Geospatial Agency (NGA) and
          the Department of Energy (DOE).
        </p>
        <p>
          Projects ranged from relatively minor engagements with just a few
          people and lasting a couple months, to larger efforts with multiple
          scrum teams developing for two or more years.
        </p>
        <p>
          I have experience with modern web technologies such as jQuery,
          Backbone and Underscore, Dojo, Tooling (Grunt &amp; Gulp), and SCSS.
        </p>
      </ProjectSection>

      <ProjectSection
        title="02. Fire Reporting"
        backgroundColor={ShowcaseTheme.palette.primary}
        clipOffset={[15, 0, 100, 90]}
        direction="rtl"
        id="FireReportings_Preview"
        feature={<img src={FireReportingFeature} alt="Fire Reporting App" />}
      >
        <p>
          A Fire reporting web app used by federal and state governmental
          agencies to track and maintain records of fire occurances. We
          developed the capability to search and filter incidents across the
          nation as well as edit properties and fire perimeters.
        </p>
        <Button whitePrimary withComponent="span">
          <Link to="/projects/FireReporting">View Project</Link>
        </Button>
      </ProjectSection>
      <ProjectSection
        title="03. Agricultural Underwriting"
        backgroundColor={ShowcaseTheme.palette.white}
        color={ShowcaseTheme.palette.black}
        clipOffset={[0, 10, 100, 95]}
        id="AgriculturalUnderwriting_Preview"
        feature={
          <img
            src={AgriculturalUnderwritingFeature}
            alt="Agricultural Underwriting App"
          />
        }
      >
        <p>
          It takes a lot of information about a property to determine whether it
          can be underwritten, we developed a web app that allowed users to view
          satellite imagery of a property, analyze soil conditions and several
          other layers.
        </p>
        <Button primary withComponent="span">
          <Link to="/projects/AgriculturalUnderwriting">View Project</Link>
        </Button>
      </ProjectSection>
      <ProjectSection
        title="04. Component Library"
        backgroundColor={ShowcaseTheme.palette.secondary2}
        clipOffset={[0, 5, 100, 85]}
        direction="rtl"
        id="ComponentLibrary_Preview"
        feature={
          <img src={ComponentLibraryFeature} alt="Component Library App" />
        }
      >
        <p>
          A solid component library is key to the success of any front-end
          application. I developed a custom React component library following
          Esri's brand styleguide.
        </p>
        <Button whiteSecondary withComponent="span">
          <Link to="/projects/ComponentLibrary">View Project</Link>
        </Button>
      </ProjectSection>
    </StyledHome>
  );
};

export default withRouter(Home);
