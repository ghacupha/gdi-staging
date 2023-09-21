import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardClassType from './card-class-type';
import CardClassTypeDetail from './card-class-type-detail';
import CardClassTypeUpdate from './card-class-type-update';
import CardClassTypeDeleteDialog from './card-class-type-delete-dialog';

const CardClassTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardClassType />} />
    <Route path="new" element={<CardClassTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CardClassTypeDetail />} />
      <Route path="edit" element={<CardClassTypeUpdate />} />
      <Route path="delete" element={<CardClassTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardClassTypeRoutes;
