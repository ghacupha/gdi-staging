import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardCharges from './card-charges';
import CardChargesDetail from './card-charges-detail';
import CardChargesUpdate from './card-charges-update';
import CardChargesDeleteDialog from './card-charges-delete-dialog';

const CardChargesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardCharges />} />
    <Route path="new" element={<CardChargesUpdate />} />
    <Route path=":id">
      <Route index element={<CardChargesDetail />} />
      <Route path="edit" element={<CardChargesUpdate />} />
      <Route path="delete" element={<CardChargesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardChargesRoutes;
