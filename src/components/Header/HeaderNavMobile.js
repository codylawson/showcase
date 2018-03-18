import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { StyledHeaderNav, StyledHeaderLink } from './Header-styled';

import Popover, { Menu, MenuItem, MenuDivider } from '../common/Popover/';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import MenuIcon from 'mdi-react/MenuIcon';

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

  _getActiveLocation = route => {
    const location = this.props.location;

    return location.pathname.indexOf(route) > -1;
  };

  render() {
    return (
      <StyledHeaderNav>
        <Popover
          targetEl={
            <StyledHeaderLink
              active={this.state.open}
              onClick={this.togglePopover}
              iconButton
            >
              <MenuIcon size={24} />
            </StyledHeaderLink>
          }
          open={this.state.open}
          onRequestClose={this.closePopover}
          placement="bottom-end"
        >
          <Menu style={{ maxWidth: '280px' }}>
            <NavLink exact to="/">
              <MenuItem>Home</MenuItem>
            </NavLink>
            <MenuDivider />
            <NavLink to="/projects/project1">
              <MenuItem>Project 1</MenuItem>
            </NavLink>
            <NavLink to="/projects/project2">
              <MenuItem>Project 2</MenuItem>
            </NavLink>
            <NavLink to="/projects/project3">
              <MenuItem>Project 3</MenuItem>
            </NavLink>
            <MenuDivider />
            <MenuItem target="_blank" href="mailto:delmarlawson@gmail.com">
              Contact Me
            </MenuItem>
            <MenuItem target="_blank" href="./Cody_Lawson_Resume.pdf">
              Resume <OpenInNewIcon size={16} />
            </MenuItem>
          </Menu>
        </Popover>
      </StyledHeaderNav>
    );
  }
}

export default withRouter(Header);
