import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DepartmentType from './department-type';
import DepartmentTypeDetail from './department-type-detail';
import DepartmentTypeUpdate from './department-type-update';
import DepartmentTypeDeleteDialog from './department-type-delete-dialog';

const DepartmentTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DepartmentType />} />
    <Route path="new" element={<DepartmentTypeUpdate />} />
    <Route path=":id">
      <Route index element={<DepartmentTypeDetail />} />
      <Route path="edit" element={<DepartmentTypeUpdate />} />
      <Route path="delete" element={<DepartmentTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DepartmentTypeRoutes;
