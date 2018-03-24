import React from 'react';

import { StyledPopoverMenuItem } from './Popover-styled';

const PopoverMenuItem = ({ children, href, ...other }) => {
  if (href) {
    const LinkPopoverMenuItem = StyledPopoverMenuItem.withComponent('a');
    return (
      <LinkPopoverMenuItem href={href} {...other}>
        {children}
      </LinkPopoverMenuItem>
    );
  } else {
    return <StyledPopoverMenuItem {...other}>{children}</StyledPopoverMenuItem>;
  }
};

export default PopoverMenuItem;
