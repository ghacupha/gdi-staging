import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbCreditFacilityType from './crb-credit-facility-type';
import CrbCreditFacilityTypeDetail from './crb-credit-facility-type-detail';
import CrbCreditFacilityTypeUpdate from './crb-credit-facility-type-update';
import CrbCreditFacilityTypeDeleteDialog from './crb-credit-facility-type-delete-dialog';

const CrbCreditFacilityTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbCreditFacilityType />} />
    <Route path="new" element={<CrbCreditFacilityTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbCreditFacilityTypeDetail />} />
      <Route path="edit" element={<CrbCreditFacilityTypeUpdate />} />
      <Route path="delete" element={<CrbCreditFacilityTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbCreditFacilityTypeRoutes;
