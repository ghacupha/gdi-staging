import React from 'react';
import { translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';
import StandardMenuItems from 'app/gdi/standards/menu';

export const StandardMenu = () => (
  <NavDropdown
    icon="th-list"
    name={translate('erp.menu.standards.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <StandardMenuItems />
  </NavDropdown>
);
