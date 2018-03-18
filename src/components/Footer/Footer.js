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
        <Button iconButton href="https://dribbble.com/_Cody" target="_blank">
          <DribbbleIcon />
        </Button>
        <Button iconButton href="https://github.com/codylawson" target="_blank">
          <GithubCircleIcon />
        </Button>
        <Button
          iconButton
          href="https://www.instagram.com/codylawson/"
          target="_blank"
        >
          <InstagramIcon />
        </Button>
      </StyledFooterActions>
    </StyledFooter>
  );
};

export default Footer;
