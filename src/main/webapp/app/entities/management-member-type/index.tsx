import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ManagementMemberType from './management-member-type';
import ManagementMemberTypeDetail from './management-member-type-detail';
import ManagementMemberTypeUpdate from './management-member-type-update';
import ManagementMemberTypeDeleteDialog from './management-member-type-delete-dialog';

const ManagementMemberTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ManagementMemberType />} />
    <Route path="new" element={<ManagementMemberTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ManagementMemberTypeDetail />} />
      <Route path="edit" element={<ManagementMemberTypeUpdate />} />
      <Route path="delete" element={<ManagementMemberTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ManagementMemberTypeRoutes;
