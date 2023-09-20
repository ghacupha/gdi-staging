import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbAccountStatus from './crb-account-status';
import CrbAccountStatusDetail from './crb-account-status-detail';
import CrbAccountStatusUpdate from './crb-account-status-update';
import CrbAccountStatusDeleteDialog from './crb-account-status-delete-dialog';

const CrbAccountStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbAccountStatus />} />
    <Route path="new" element={<CrbAccountStatusUpdate />} />
    <Route path=":id">
      <Route index element={<CrbAccountStatusDetail />} />
      <Route path="edit" element={<CrbAccountStatusUpdate />} />
      <Route path="delete" element={<CrbAccountStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbAccountStatusRoutes;
