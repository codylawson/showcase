import React from 'react';

import { StyledPopoverMenuItem } from './Popover-styled';

const PopoverMenuItem = props => {
  return <StyledPopoverMenuItem>{props.children}</StyledPopoverMenuItem>;
};

export default PopoverMenuItem;
