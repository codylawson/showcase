import React from 'react';
import { Route } from 'react-router-dom';

import { StyledProject } from './Project-styled';

import FooProject from '../projects/FooProject';
import BarProject from '../projects/BarProject';
import BazProject from '../projects/BazProject';

const Project = props => {
  return (
    <StyledProject>
      <Route path="/projects/foo" component={FooProject} />
      <Route path="/projects/bar" component={BarProject} />
      <Route path="/projects/baz" component={BazProject} />
    </StyledProject>
  );
};

export default Project;
