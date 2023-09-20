import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardBrandType from './card-brand-type';
import CardBrandTypeDetail from './card-brand-type-detail';
import CardBrandTypeUpdate from './card-brand-type-update';
import CardBrandTypeDeleteDialog from './card-brand-type-delete-dialog';

const CardBrandTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardBrandType />} />
    <Route path="new" element={<CardBrandTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CardBrandTypeDetail />} />
      <Route path="edit" element={<CardBrandTypeUpdate />} />
      <Route path="delete" element={<CardBrandTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardBrandTypeRoutes;
