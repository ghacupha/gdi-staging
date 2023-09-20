import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanProductType from './loan-product-type';
import LoanProductTypeDetail from './loan-product-type-detail';
import LoanProductTypeUpdate from './loan-product-type-update';
import LoanProductTypeDeleteDialog from './loan-product-type-delete-dialog';

const LoanProductTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanProductType />} />
    <Route path="new" element={<LoanProductTypeUpdate />} />
    <Route path=":id">
      <Route index element={<LoanProductTypeDetail />} />
      <Route path="edit" element={<LoanProductTypeUpdate />} />
      <Route path="delete" element={<LoanProductTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanProductTypeRoutes;
