import React, { Fragment } from 'react';

import Hero, { HeroBody } from '../../Hero';
import ProjectSection from '../../ProjectSection';
import RoleSection from '../../RoleSection';
import TechnologySection from '../../TechnologySection';

import { StyledRoleSectionContainer } from '../../RoleSection/RoleSection-styled';
import { StyledTechnologySectionContainer } from '../../TechnologySection/TechnologySection-styled';

import CodeRoleGraphic from '../../images/CodeRole.svg';
import DesignRoleGraphic from '../../images/DesignRole.svg';
import ReactLogo from '../../images/ReactLogo.svg';
import GenericTechLogo from '../../images/GenericTechLogo.svg';

import ShowcaseTheme from '../../../theme/ShowcaseTheme';

const ComponentLibraryProject = props => {
  return (
    <Fragment>
      <Hero
        title="Component Library"
        style={{
          background: ShowcaseTheme.palette.lightestGray,
          color: ShowcaseTheme.palette.black
        }}
      >
        <HeroBody style={{ maxWidth: '800px', fontSize: '1.3rem' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            justo ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla
            maximus augue vitae nunc ultricies sodales.
          </p>
        </HeroBody>
      </Hero>

      <ProjectSection
        title="Role & Responsibilities"
        backgroundColor={ShowcaseTheme.palette.primary}
        clipOffset={[15, 0, 100, 90]}
      >
        <StyledRoleSectionContainer>
          <RoleSection title="UI Design" graphic={DesignRoleGraphic}>
            I did some ui design and stuff
          </RoleSection>
          <RoleSection title="Front-End Development" graphic={CodeRoleGraphic}>
            I did some dev stuff
          </RoleSection>
        </StyledRoleSectionContainer>
      </ProjectSection>

      <ProjectSection
        title="The Process"
        backgroundColor={ShowcaseTheme.palette.lightestGray}
        color={ShowcaseTheme.palette.black}
        clipOffset={[10, 0, 95, 100]}
        direction="rtl"
      >
        Some subsections for the various steps we went through, wireframing,
        lo-fi/hi-fi mockups, prototyping, dev. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus justo ligula, aliquet vel lectus
        quis, accumsan maximus ex. Nulla maximus augue vitae nunc ultricies
        sodales.
      </ProjectSection>

      <ProjectSection
        title="Technology"
        backgroundColor={ShowcaseTheme.palette.primary}
        clipOffset={[0, 10, 85, 100]}
        direction="rtl"
      >
        <StyledTechnologySectionContainer>
          <TechnologySection title="React & Redux" graphic={ReactLogo}>
            We used react
          </TechnologySection>
          <TechnologySection
            title="Styled Components"
            graphic={GenericTechLogo}
          >
            We used styled components
          </TechnologySection>
        </StyledTechnologySectionContainer>
      </ProjectSection>

      <ProjectSection
        title="Lessons Learned"
        backgroundColor={ShowcaseTheme.palette.primary3}
        clipOffset={[5, 0, 100, 90]}
        direction="rtl"
      >
        2-3 bullet points of things we learned while going through this process.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo
        ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla maximus
        augue vitae nunc ultricies sodales.
      </ProjectSection>
    </Fragment>
  );
};

export default ComponentLibraryProject;
