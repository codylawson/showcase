import React from 'react';
import { Route } from 'react-router-dom';

import { StyledProject } from './Project-styled';

import FireReporting from '../projects/FireReportingProject';
import AgriculturalUnderwriting from '../projects/AgriculturalUnderwritingProject';
import ComponentLibrary from '../projects/ComponentLibraryProject';

const Project = props => {
  return (
    <StyledProject>
      <Route path="/projects/FireReporting" component={FireReporting} />
      <Route
        path="/projects/AgriculturalUnderwriting"
        component={AgriculturalUnderwriting}
      />
      <Route path="/projects/ComponentLibrary" component={ComponentLibrary} />
    </StyledProject>
  );
};

export default Project;
