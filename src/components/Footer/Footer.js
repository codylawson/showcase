import React from 'react';
import {
  StyledFooter,
  StyledFooterTitle,
  StyledFooterActions
} from './Footer-styled';

import Button from '../common/Button';
import DribbbleIcon from 'mdi-react/DribbbleIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

const Footer = props => {
  return (
    <StyledFooter>
      <StyledFooterTitle>Some Places To Find Me</StyledFooterTitle>
      <StyledFooterActions>
        <Button iconButton>
          <DribbbleIcon />
        </Button>
        <Button iconButton>
          <GithubCircleIcon />
        </Button>
        <Button iconButton>
          <InstagramIcon />
        </Button>
      </StyledFooterActions>
    </StyledFooter>
  );
};

export default Footer;
