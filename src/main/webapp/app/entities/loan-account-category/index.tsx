import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanAccountCategory from './loan-account-category';
import LoanAccountCategoryDetail from './loan-account-category-detail';
import LoanAccountCategoryUpdate from './loan-account-category-update';
import LoanAccountCategoryDeleteDialog from './loan-account-category-delete-dialog';

const LoanAccountCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanAccountCategory />} />
    <Route path="new" element={<LoanAccountCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<LoanAccountCategoryDetail />} />
      <Route path="edit" element={<LoanAccountCategoryUpdate />} />
      <Route path="delete" element={<LoanAccountCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanAccountCategoryRoutes;
