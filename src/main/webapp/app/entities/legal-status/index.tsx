import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import LegalStatus from './legal-status';
import LegalStatusDetail from './legal-status-detail';
import LegalStatusUpdate from './legal-status-update';
import LegalStatusDeleteDialog from './legal-status-delete-dialog';

const LegalStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<LegalStatus />} />
    <Route path="new" element={<LegalStatusUpdate />} />
    <Route path=":id">
      <Route index element={<LegalStatusDetail />} />
      <Route path="edit" element={<LegalStatusUpdate />} />
      <Route path="delete" element={<LegalStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default LegalStatusRoutes;
