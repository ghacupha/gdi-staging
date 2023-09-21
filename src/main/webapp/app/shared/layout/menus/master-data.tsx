import React from 'react';

import { NavDropdown } from './menu-components';
import MasterDataMenuItems from 'app/gdi/master/master-data-menu';

export const MasterDataMenu = () => (
  <NavDropdown icon="search" name="Master" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MasterDataMenuItems />
  </NavDropdown>
);
