import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import OutletStatus from './outlet-status';
import OutletStatusDetail from './outlet-status-detail';
import OutletStatusUpdate from './outlet-status-update';
import OutletStatusDeleteDialog from './outlet-status-delete-dialog';

const OutletStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<OutletStatus />} />
    <Route path="new" element={<OutletStatusUpdate />} />
    <Route path=":id">
      <Route index element={<OutletStatusDetail />} />
      <Route path="edit" element={<OutletStatusUpdate />} />
      <Route path="delete" element={<OutletStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default OutletStatusRoutes;
