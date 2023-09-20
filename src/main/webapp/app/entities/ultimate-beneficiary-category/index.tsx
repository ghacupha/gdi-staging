import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UltimateBeneficiaryCategory from './ultimate-beneficiary-category';
import UltimateBeneficiaryCategoryDetail from './ultimate-beneficiary-category-detail';
import UltimateBeneficiaryCategoryUpdate from './ultimate-beneficiary-category-update';
import UltimateBeneficiaryCategoryDeleteDialog from './ultimate-beneficiary-category-delete-dialog';

const UltimateBeneficiaryCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<UltimateBeneficiaryCategory />} />
    <Route path="new" element={<UltimateBeneficiaryCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<UltimateBeneficiaryCategoryDetail />} />
      <Route path="edit" element={<UltimateBeneficiaryCategoryUpdate />} />
      <Route path="delete" element={<UltimateBeneficiaryCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UltimateBeneficiaryCategoryRoutes;
