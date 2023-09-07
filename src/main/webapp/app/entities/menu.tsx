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
      <MenuItem icon="asterisk" to="/bank-branch-code">
        <Translate contentKey="global.menu.entities.bankBranchCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/outlet-status">
        <Translate contentKey="global.menu.entities.outletStatus" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/outlet-type">
        <Translate contentKey="global.menu.entities.outletType" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/county-code">
        <Translate contentKey="global.menu.entities.countyCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/service-outlet">
        <Translate contentKey="global.menu.entities.serviceOutlet" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer-id-document-type">
        <Translate contentKey="global.menu.entities.customerIdDocumentType" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/institution-code">
        <Translate contentKey="global.menu.entities.institutionCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/mfb-branch-code">
        <Translate contentKey="global.menu.entities.mfbBranchCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/iso-country-code">
        <Translate contentKey="global.menu.entities.isoCountryCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/sub-county-code">
        <Translate contentKey="global.menu.entities.subCountyCode" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
