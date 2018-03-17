import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  StyledHeader,
  StyledHeaderBrand,
  StyledHeaderNav,
  StyledHeaderLink
} from './Header-styled';

import Popover, { Menu, MenuItem } from '../common/Popover/';

const NavLinkSpan = StyledHeaderLink.withComponent('span');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  togglePopover = () => {
    this.setState({
      open: !this.state.open
    });
  };

  closePopover = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <StyledHeader>
        <StyledHeaderBrand>Cody Lawson</StyledHeaderBrand>
        <StyledHeaderNav>
          <NavLink to="/">
            <NavLinkSpan>Home</NavLinkSpan>
          </NavLink>
          <Popover
            targetEl={
              <StyledHeaderLink onClick={this.togglePopover}>
                Projects
              </StyledHeaderLink>
            }
            open={this.state.open}
            onRequestClose={this.closePopover}
          >
            <Menu style={{ maxWidth: '280px' }}>
              <NavLink to="/projects/project1">
                <MenuItem>Project 1</MenuItem>
              </NavLink>
              <NavLink to="/projects/project2">
                <MenuItem>Project 2</MenuItem>
              </NavLink>
              <NavLink to="/projects/project3">
                <MenuItem>Project 3</MenuItem>
              </NavLink>
            </Menu>
          </Popover>
          <StyledHeaderLink>Resume</StyledHeaderLink>
        </StyledHeaderNav>
      </StyledHeader>
    );
  }
}

export default Header;
