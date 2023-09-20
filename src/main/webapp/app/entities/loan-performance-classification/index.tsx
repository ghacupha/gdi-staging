import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LoanPerformanceClassification from './loan-performance-classification';
import LoanPerformanceClassificationDetail from './loan-performance-classification-detail';
import LoanPerformanceClassificationUpdate from './loan-performance-classification-update';
import LoanPerformanceClassificationDeleteDialog from './loan-performance-classification-delete-dialog';

const LoanPerformanceClassificationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LoanPerformanceClassification />} />
    <Route path="new" element={<LoanPerformanceClassificationUpdate />} />
    <Route path=":id">
      <Route index element={<LoanPerformanceClassificationDetail />} />
      <Route path="edit" element={<LoanPerformanceClassificationUpdate />} />
      <Route path="delete" element={<LoanPerformanceClassificationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LoanPerformanceClassificationRoutes;
