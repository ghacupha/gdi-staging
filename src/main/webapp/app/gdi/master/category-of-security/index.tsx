import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CategoryOfSecurity from './category-of-security';
import CategoryOfSecurityDetail from './category-of-security-detail';
import CategoryOfSecurityUpdate from './category-of-security-update';
import CategoryOfSecurityDeleteDialog from './category-of-security-delete-dialog';

const CategoryOfSecurityRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CategoryOfSecurity />} />
    <Route path="new" element={<CategoryOfSecurityUpdate />} />
    <Route path=":id">
      <Route index element={<CategoryOfSecurityDetail />} />
      <Route path="edit" element={<CategoryOfSecurityUpdate />} />
      <Route path="delete" element={<CategoryOfSecurityDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CategoryOfSecurityRoutes;
