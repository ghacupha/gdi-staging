import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/placeholder">
        <Translate contentKey="global.menu.entities.erpServicePlaceholder" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/universally-unique-mapping">
        <Translate contentKey="global.menu.entities.universallyUniqueMapping" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
