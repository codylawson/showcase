import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { StyledApp } from './App-styled';

import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      document.getElementsByTagName('html')[0].scrollTop = 0;
    }
    return true;
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/" component={Footer} />
      </StyledApp>
    );
  }
}

export default App;
