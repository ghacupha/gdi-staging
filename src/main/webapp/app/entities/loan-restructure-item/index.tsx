import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanRestructureItem from './loan-restructure-item';
import LoanRestructureItemDetail from './loan-restructure-item-detail';
import LoanRestructureItemUpdate from './loan-restructure-item-update';
import LoanRestructureItemDeleteDialog from './loan-restructure-item-delete-dialog';

const LoanRestructureItemRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanRestructureItem />} />
    <Route path="new" element={<LoanRestructureItemUpdate />} />
    <Route path=":id">
      <Route index element={<LoanRestructureItemDetail />} />
      <Route path="edit" element={<LoanRestructureItemUpdate />} />
      <Route path="delete" element={<LoanRestructureItemDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanRestructureItemRoutes;
