import React from 'react';
import { translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';
import ServicesMenuItems from 'app/gdi/service/menu';

export const ServicesMenu = () => (
  <NavDropdown
    icon="th-list"
    name={translate('erp.menu.services.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <ServicesMenuItems />
  </NavDropdown>
);
