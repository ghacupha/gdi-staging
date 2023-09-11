import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/placeholder">
        <Translate contentKey="global.menu.entities.servicePlaceholder" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/bank-branch-code">
        <Translate contentKey="global.menu.entities.standardsBankBranchCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/outlet-status">
        <Translate contentKey="global.menu.entities.standardsOutletStatus" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/outlet-type">
        <Translate contentKey="global.menu.entities.standardsOutletType" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/county-code">
        <Translate contentKey="global.menu.entities.standardsCountyCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/service-outlet">
        <Translate contentKey="global.menu.entities.standardsServiceOutlet" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer-id-document-type">
        <Translate contentKey="global.menu.entities.standardsCustomerIdDocumentType" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/institution-code">
        <Translate contentKey="global.menu.entities.standardsInstitutionCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/mfb-branch-code">
        <Translate contentKey="global.menu.entities.standardsMfbBranchCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/iso-country-code">
        <Translate contentKey="global.menu.entities.standardsIsoCountryCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/sub-county-code">
        <Translate contentKey="global.menu.entities.standardsSubCountyCode" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/universally-unique-mapping">
        <Translate contentKey="global.menu.entities.serviceUniversallyUniqueMapping" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
