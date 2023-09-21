import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import StaffCurrentEmploymentStatus from './staff-current-employment-status';
import StaffCurrentEmploymentStatusDetail from './staff-current-employment-status-detail';
import StaffCurrentEmploymentStatusUpdate from './staff-current-employment-status-update';
import StaffCurrentEmploymentStatusDeleteDialog from './staff-current-employment-status-delete-dialog';

const StaffCurrentEmploymentStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<StaffCurrentEmploymentStatus />} />
    <Route path="new" element={<StaffCurrentEmploymentStatusUpdate />} />
    <Route path=":id">
      <Route index element={<StaffCurrentEmploymentStatusDetail />} />
      <Route path="edit" element={<StaffCurrentEmploymentStatusUpdate />} />
      <Route path="delete" element={<StaffCurrentEmploymentStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default StaffCurrentEmploymentStatusRoutes;
