import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BankBranchCode from './bank-branch-code';
import OutletStatus from './outlet-status';
import OutletType from './outlet-type';
import CountyCode from './county-code';
import ServiceOutlet from './service-outlet';
import CustomerIDDocumentType from './customer-id-document-type';
import InstitutionCode from './institution-code';
import MfbBranchCode from './mfb-branch-code';
import IsoCountryCode from './iso-country-code';
import SubCountyCode from './sub-county-code';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="bank-branch-code/*" element={<BankBranchCode />} />
        <Route path="outlet-status/*" element={<OutletStatus />} />
        <Route path="outlet-type/*" element={<OutletType />} />
        <Route path="county-code/*" element={<CountyCode />} />
        <Route path="service-outlet/*" element={<ServiceOutlet />} />
        <Route path="customer-id-document-type/*" element={<CustomerIDDocumentType />} />
        <Route path="institution-code/*" element={<InstitutionCode />} />
        <Route path="mfb-branch-code/*" element={<MfbBranchCode />} />
        <Route path="iso-country-code/*" element={<IsoCountryCode />} />
        <Route path="sub-county-code/*" element={<SubCountyCode />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};