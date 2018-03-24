import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { StyledHeaderNav, StyledHeaderLink } from './Header-styled';

import Popover, { Menu, MenuItem } from '../common/Popover/';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

const NavLinkSpan = StyledHeaderLink.withComponent('span');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.closePopover();
    }
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
        <NavLink exact to="/">
          <NavLinkSpan>Home</NavLinkSpan>
        </NavLink>
        <Popover
          targetEl={
            <StyledHeaderLink
              active={this._getActiveLocation('projects')}
              onClick={this.togglePopover}
            >
              Projects <ChevronDownIcon size={18} />
            </StyledHeaderLink>
          }
          open={this.state.open}
          onRequestClose={this.closePopover}
        >
          <Menu style={{ maxWidth: '280px' }}>
            <NavLink to="/projects/FireReporting">
              <MenuItem>Fire Reporting</MenuItem>
            </NavLink>
            <NavLink to="/projects/AgriculturalUnderwriting">
              <MenuItem>Agricultural Underwriting</MenuItem>
            </NavLink>
            <NavLink to="/projects/ComponentLibrary">
              <MenuItem>Component Library</MenuItem>
            </NavLink>
          </Menu>
        </Popover>
        <StyledHeaderLink target="_blank" href="mailto:delmarlawson@gmail.com">
          Contact Me
        </StyledHeaderLink>
        <StyledHeaderLink exact target="_blank" href="/Cody_Lawson_Resume.pdf">
          Resume <OpenInNewIcon size={16} />
        </StyledHeaderLink>
      </StyledHeaderNav>
    );
  }
}

export default withRouter(Header);
