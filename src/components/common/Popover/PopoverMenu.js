import React from 'react';

import { StyledPopoverMenu } from './Popover-styled';

const PopoverMenu = props => {
  return <StyledPopoverMenu>{props.children}</StyledPopoverMenu>;
};

export default PopoverMenu;
