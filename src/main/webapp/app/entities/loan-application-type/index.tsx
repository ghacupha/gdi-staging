import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanApplicationType from './loan-application-type';
import LoanApplicationTypeDetail from './loan-application-type-detail';
import LoanApplicationTypeUpdate from './loan-application-type-update';
import LoanApplicationTypeDeleteDialog from './loan-application-type-delete-dialog';

const LoanApplicationTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanApplicationType />} />
    <Route path="new" element={<LoanApplicationTypeUpdate />} />
    <Route path=":id">
      <Route index element={<LoanApplicationTypeDetail />} />
      <Route path="edit" element={<LoanApplicationTypeUpdate />} />
      <Route path="delete" element={<LoanApplicationTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanApplicationTypeRoutes;
