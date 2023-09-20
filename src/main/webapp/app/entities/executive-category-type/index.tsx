import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ExecutiveCategoryType from './executive-category-type';
import ExecutiveCategoryTypeDetail from './executive-category-type-detail';
import ExecutiveCategoryTypeUpdate from './executive-category-type-update';
import ExecutiveCategoryTypeDeleteDialog from './executive-category-type-delete-dialog';

const ExecutiveCategoryTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ExecutiveCategoryType />} />
    <Route path="new" element={<ExecutiveCategoryTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ExecutiveCategoryTypeDetail />} />
      <Route path="edit" element={<ExecutiveCategoryTypeUpdate />} />
      <Route path="delete" element={<ExecutiveCategoryTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ExecutiveCategoryTypeRoutes;
