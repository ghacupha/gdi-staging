import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardStatusFlag from './card-status-flag';
import CardStatusFlagDetail from './card-status-flag-detail';
import CardStatusFlagUpdate from './card-status-flag-update';
import CardStatusFlagDeleteDialog from './card-status-flag-delete-dialog';

const CardStatusFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardStatusFlag />} />
    <Route path="new" element={<CardStatusFlagUpdate />} />
    <Route path=":id">
      <Route index element={<CardStatusFlagDetail />} />
      <Route path="edit" element={<CardStatusFlagUpdate />} />
      <Route path="delete" element={<CardStatusFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardStatusFlagRoutes;
