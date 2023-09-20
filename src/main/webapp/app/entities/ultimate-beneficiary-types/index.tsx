import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UltimateBeneficiaryTypes from './ultimate-beneficiary-types';
import UltimateBeneficiaryTypesDetail from './ultimate-beneficiary-types-detail';
import UltimateBeneficiaryTypesUpdate from './ultimate-beneficiary-types-update';
import UltimateBeneficiaryTypesDeleteDialog from './ultimate-beneficiary-types-delete-dialog';

const UltimateBeneficiaryTypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<UltimateBeneficiaryTypes />} />
    <Route path="new" element={<UltimateBeneficiaryTypesUpdate />} />
    <Route path=":id">
      <Route index element={<UltimateBeneficiaryTypesDetail />} />
      <Route path="edit" element={<UltimateBeneficiaryTypesUpdate />} />
      <Route path="delete" element={<UltimateBeneficiaryTypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UltimateBeneficiaryTypesRoutes;
