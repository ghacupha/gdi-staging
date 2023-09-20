import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanRepaymentFrequency from './loan-repayment-frequency';
import LoanRepaymentFrequencyDetail from './loan-repayment-frequency-detail';
import LoanRepaymentFrequencyUpdate from './loan-repayment-frequency-update';
import LoanRepaymentFrequencyDeleteDialog from './loan-repayment-frequency-delete-dialog';

const LoanRepaymentFrequencyRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanRepaymentFrequency />} />
    <Route path="new" element={<LoanRepaymentFrequencyUpdate />} />
    <Route path=":id">
      <Route index element={<LoanRepaymentFrequencyDetail />} />
      <Route path="edit" element={<LoanRepaymentFrequencyUpdate />} />
      <Route path="delete" element={<LoanRepaymentFrequencyDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanRepaymentFrequencyRoutes;
