import { Button, StyledMenu } from './Menu.sc';

import { GROUP_IDS } from '../../utils/consts';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ activeGroupID, onGroupSelect }) => (
  <StyledMenu>
    {Object.keys(GROUP_IDS).map(groupID => (
      <Button
        isActive={activeGroupID === groupID}
        key={groupID}
        onClick={() => {
          onGroupSelect(groupID);
        }}
      >
        {GROUP_IDS[groupID]}
      </Button>
    ))}
  </StyledMenu>
);

Menu.propTypes = {
  activeGroupID: PropTypes.string.isRequired,
  onGroupSelect: PropTypes.func.isRequired,
};

export default Menu;
