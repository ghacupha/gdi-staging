import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbSubmittingInstitutionCategory from './crb-submitting-institution-category';
import CrbSubmittingInstitutionCategoryDetail from './crb-submitting-institution-category-detail';
import CrbSubmittingInstitutionCategoryUpdate from './crb-submitting-institution-category-update';
import CrbSubmittingInstitutionCategoryDeleteDialog from './crb-submitting-institution-category-delete-dialog';

const CrbSubmittingInstitutionCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbSubmittingInstitutionCategory />} />
    <Route path="new" element={<CrbSubmittingInstitutionCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<CrbSubmittingInstitutionCategoryDetail />} />
      <Route path="edit" element={<CrbSubmittingInstitutionCategoryUpdate />} />
      <Route path="delete" element={<CrbSubmittingInstitutionCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbSubmittingInstitutionCategoryRoutes;
