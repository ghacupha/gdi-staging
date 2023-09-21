import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InsiderCategoryTypes from './insider-category-types';
import InsiderCategoryTypesDetail from './insider-category-types-detail';
import InsiderCategoryTypesUpdate from './insider-category-types-update';
import InsiderCategoryTypesDeleteDialog from './insider-category-types-delete-dialog';

const InsiderCategoryTypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InsiderCategoryTypes />} />
    <Route path="new" element={<InsiderCategoryTypesUpdate />} />
    <Route path=":id">
      <Route index element={<InsiderCategoryTypesDetail />} />
      <Route path="edit" element={<InsiderCategoryTypesUpdate />} />
      <Route path="delete" element={<InsiderCategoryTypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InsiderCategoryTypesRoutes;
