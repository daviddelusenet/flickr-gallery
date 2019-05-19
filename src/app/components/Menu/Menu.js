import { Button, StyledMenu } from './Menu.sc';

import { GROUP_IDS } from '../../utils/consts';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ onGroupSelect }) => (
  <StyledMenu>
    {Object.keys(GROUP_IDS).map(groupID => (
      <Button
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
  onGroupSelect: PropTypes.func.isRequired,
};

export default Menu;
