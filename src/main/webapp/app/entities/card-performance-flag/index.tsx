import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardPerformanceFlag from './card-performance-flag';
import CardPerformanceFlagDetail from './card-performance-flag-detail';
import CardPerformanceFlagUpdate from './card-performance-flag-update';
import CardPerformanceFlagDeleteDialog from './card-performance-flag-delete-dialog';

const CardPerformanceFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardPerformanceFlag />} />
    <Route path="new" element={<CardPerformanceFlagUpdate />} />
    <Route path=":id">
      <Route index element={<CardPerformanceFlagDetail />} />
      <Route path="edit" element={<CardPerformanceFlagUpdate />} />
      <Route path="delete" element={<CardPerformanceFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardPerformanceFlagRoutes;
