import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanRestructureFlag from './loan-restructure-flag';
import LoanRestructureFlagDetail from './loan-restructure-flag-detail';
import LoanRestructureFlagUpdate from './loan-restructure-flag-update';
import LoanRestructureFlagDeleteDialog from './loan-restructure-flag-delete-dialog';

const LoanRestructureFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanRestructureFlag />} />
    <Route path="new" element={<LoanRestructureFlagUpdate />} />
    <Route path=":id">
      <Route index element={<LoanRestructureFlagDetail />} />
      <Route path="edit" element={<LoanRestructureFlagUpdate />} />
      <Route path="delete" element={<LoanRestructureFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanRestructureFlagRoutes;
