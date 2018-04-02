import React, { Fragment } from 'react';

import Hero, { HeroBody } from '../../Hero';
import ProjectSection from '../../ProjectSection';
import RoleSection from '../../RoleSection';
import TechnologySection from '../../TechnologySection';
import LessonSection from '../../LessonSection';

import { StyledProjectSectionTitle } from '../../ProjectSection/ProjectSection-styled';
import { StyledRoleSectionContainer } from '../../RoleSection/RoleSection-styled';
import { StyledTechnologySectionContainer } from '../../TechnologySection/TechnologySection-styled';
import {
  StyledLessonSectionContainer,
  StyledLessonTitle,
  StyledLessonDescription
} from '../../LessonSection/LessonSection-styled';

import CodeRoleGraphic from '../../images/CodeRole.svg';
import DesignRoleGraphic from '../../images/DesignRole.svg';
import ReactLogo from '../../images/ReactLogo.svg';
import EsriLogo from '../../images/EsriLogo.svg';
import BalsamiqLogo from '../../images/BalsamiqLogo.svg';
import SketchLogo from '../../images/SketchLogo.svg';

import ShowcaseTheme from '../../../theme/ShowcaseTheme';

const FireReportingProject = props => {
  return (
    <Fragment>
      <Hero
        title="Fire Reporting"
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
        backgroundColor={ShowcaseTheme.palette.secondary}
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
        clipOffset={[5, 0, 100, 95]}
        direction="rtl"
      >
        <StyledTechnologySectionContainer>
          <TechnologySection title="React & Redux" graphic={ReactLogo}>
            We used react
          </TechnologySection>
          <TechnologySection title="Esri JS API" graphic={EsriLogo}>
            We used esri's api
          </TechnologySection>
          <TechnologySection title="Sketch 3" graphic={SketchLogo}>
            We used Sketch 3
          </TechnologySection>
          <TechnologySection title="Balsamiq" graphic={BalsamiqLogo}>
            We used Balsamiq
          </TechnologySection>
        </StyledTechnologySectionContainer>
      </ProjectSection>

      <ProjectSection
        backgroundColor={ShowcaseTheme.palette.white}
        clipOffset={[3, 0, 100, 90]}
        direction="rtl"
      >
        <StyledLessonSectionContainer>
          <LessonSection
            backgroundColor={ShowcaseTheme.palette.white}
            color={ShowcaseTheme.palette.black}
          >
            <StyledProjectSectionTitle>
              Lessons Learned
            </StyledProjectSectionTitle>
            <StyledLessonTitle>Lesson 1</StyledLessonTitle>
            <StyledLessonDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              justo ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla
              maximus augue vitae nunc ultricies sodales.
            </StyledLessonDescription>
          </LessonSection>
          <LessonSection
            backgroundColor={ShowcaseTheme.palette.lighterGray}
            color={ShowcaseTheme.palette.black}
          >
            <StyledProjectSectionTitle>
              <br />
            </StyledProjectSectionTitle>
            <StyledLessonTitle>Lesson 2</StyledLessonTitle>
            <StyledLessonDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              justo ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla
              maximus augue vitae nunc ultricies sodales.
            </StyledLessonDescription>
          </LessonSection>
        </StyledLessonSectionContainer>
      </ProjectSection>
    </Fragment>
  );
};

export default FireReportingProject;
