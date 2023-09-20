import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbCreditApplicationStatus from './crb-credit-application-status';
import CrbCreditApplicationStatusDetail from './crb-credit-application-status-detail';
import CrbCreditApplicationStatusUpdate from './crb-credit-application-status-update';
import CrbCreditApplicationStatusDeleteDialog from './crb-credit-application-status-delete-dialog';

const CrbCreditApplicationStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbCreditApplicationStatus />} />
    <Route path="new" element={<CrbCreditApplicationStatusUpdate />} />
    <Route path=":id">
      <Route index element={<CrbCreditApplicationStatusDetail />} />
      <Route path="edit" element={<CrbCreditApplicationStatusUpdate />} />
      <Route path="delete" element={<CrbCreditApplicationStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbCreditApplicationStatusRoutes;
