import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardCategoryType from './card-category-type';
import CardCategoryTypeDetail from './card-category-type-detail';
import CardCategoryTypeUpdate from './card-category-type-update';
import CardCategoryTypeDeleteDialog from './card-category-type-delete-dialog';

const CardCategoryTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardCategoryType />} />
    <Route path="new" element={<CardCategoryTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CardCategoryTypeDetail />} />
      <Route path="edit" element={<CardCategoryTypeUpdate />} />
      <Route path="delete" element={<CardCategoryTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardCategoryTypeRoutes;
