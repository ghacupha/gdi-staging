import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanApplicationStatus from './loan-application-status';
import LoanApplicationStatusDetail from './loan-application-status-detail';
import LoanApplicationStatusUpdate from './loan-application-status-update';
import LoanApplicationStatusDeleteDialog from './loan-application-status-delete-dialog';

const LoanApplicationStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanApplicationStatus />} />
    <Route path="new" element={<LoanApplicationStatusUpdate />} />
    <Route path=":id">
      <Route index element={<LoanApplicationStatusDetail />} />
      <Route path="edit" element={<LoanApplicationStatusUpdate />} />
      <Route path="delete" element={<LoanApplicationStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanApplicationStatusRoutes;
