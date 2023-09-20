import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardTypes from './card-types';
import CardTypesDetail from './card-types-detail';
import CardTypesUpdate from './card-types-update';
import CardTypesDeleteDialog from './card-types-delete-dialog';

const CardTypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardTypes />} />
    <Route path="new" element={<CardTypesUpdate />} />
    <Route path=":id">
      <Route index element={<CardTypesDetail />} />
      <Route path="edit" element={<CardTypesUpdate />} />
      <Route path="delete" element={<CardTypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardTypesRoutes;
