import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
  StyledHeader,
  StyledHeaderBrand,
  StyledHeaderNav,
  StyledHeaderLink
} from './Header-styled';

import Popover, { Menu, MenuItem } from '../common/Popover/';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

const NavLinkSpan = StyledHeaderLink.withComponent('span');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isScrolled: false
    };
  }

  handleScroll = event => {
    this.setState({
      isScrolled: window.scrollY > 40
    });
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

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
      <StyledHeader scrolled={this.state.isScrolled}>
        <StyledHeaderBrand>Cody Lawson</StyledHeaderBrand>
        <StyledHeaderNav>
          <NavLink exact to="/">
            <NavLinkSpan>Home</NavLinkSpan>
          </NavLink>
          <Popover
            targetEl={
              <StyledHeaderLink
                active={this._getActiveLocation('projects')}
                onClick={this.togglePopover}
              >
                Projects <ChevronDownIcon size={16} />
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
          <StyledHeaderLink target="_blank" href="./Cody_Lawson_Resume.pdf">
            Resume <OpenInNewIcon size={18} />
          </StyledHeaderLink>
        </StyledHeaderNav>
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
