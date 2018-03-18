import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { StyledHeader, StyledHeaderBrand } from './Header-styled';
import HeaderNav from './HeaderNav';
import HeaderNavMobile from './HeaderNavMobile';

import ShowcaseTheme from '../../theme/ShowcaseTheme';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isMobile: false
    };
  }

  handleScroll = event => {
    this.setState({
      isScrolled: window.scrollY > 40
    });
  };

  handleResize = event => {
    this.setState({
      isMobile: window.outerWidth <= parseInt(ShowcaseTheme.small, 10)
    });
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  };

  _getActiveLocation = route => {
    const location = this.props.location;

    return location.pathname.indexOf(route) > -1;
  };

  render() {
    let headerNav;
    if (this.state.isMobile) {
      headerNav = <HeaderNavMobile />;
    } else {
      headerNav = <HeaderNav />;
    }

    return (
      <StyledHeader scrolled={this.state.isScrolled}>
        <StyledHeaderBrand scrolled={this.state.isScrolled}>
          Cody Lawson
        </StyledHeaderBrand>
        {headerNav}
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
