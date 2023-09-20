import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AnticipatedMaturityPeriood from './anticipated-maturity-periood';
import AnticipatedMaturityPerioodDetail from './anticipated-maturity-periood-detail';
import AnticipatedMaturityPerioodUpdate from './anticipated-maturity-periood-update';
import AnticipatedMaturityPerioodDeleteDialog from './anticipated-maturity-periood-delete-dialog';

const AnticipatedMaturityPerioodRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AnticipatedMaturityPeriood />} />
    <Route path="new" element={<AnticipatedMaturityPerioodUpdate />} />
    <Route path=":id">
      <Route index element={<AnticipatedMaturityPerioodDetail />} />
      <Route path="edit" element={<AnticipatedMaturityPerioodUpdate />} />
      <Route path="delete" element={<AnticipatedMaturityPerioodDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AnticipatedMaturityPerioodRoutes;
