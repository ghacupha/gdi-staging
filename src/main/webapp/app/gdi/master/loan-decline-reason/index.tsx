import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanDeclineReason from './loan-decline-reason';
import LoanDeclineReasonDetail from './loan-decline-reason-detail';
import LoanDeclineReasonUpdate from './loan-decline-reason-update';
import LoanDeclineReasonDeleteDialog from './loan-decline-reason-delete-dialog';

const LoanDeclineReasonRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanDeclineReason />} />
    <Route path="new" element={<LoanDeclineReasonUpdate />} />
    <Route path=":id">
      <Route index element={<LoanDeclineReasonDetail />} />
      <Route path="edit" element={<LoanDeclineReasonUpdate />} />
      <Route path="delete" element={<LoanDeclineReasonDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanDeclineReasonRoutes;
