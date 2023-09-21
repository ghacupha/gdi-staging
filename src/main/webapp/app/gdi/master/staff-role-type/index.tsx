import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import StaffRoleType from './staff-role-type';
import StaffRoleTypeDetail from './staff-role-type-detail';
import StaffRoleTypeUpdate from './staff-role-type-update';
import StaffRoleTypeDeleteDialog from './staff-role-type-delete-dialog';

const StaffRoleTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<StaffRoleType />} />
    <Route path="new" element={<StaffRoleTypeUpdate />} />
    <Route path=":id">
      <Route index element={<StaffRoleTypeDetail />} />
      <Route path="edit" element={<StaffRoleTypeUpdate />} />
      <Route path="delete" element={<StaffRoleTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default StaffRoleTypeRoutes;
