import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ServiceOutlet from './service-outlet';
import ServiceOutletDetail from './service-outlet-detail';
import ServiceOutletUpdate from './service-outlet-update';
import ServiceOutletDeleteDialog from './service-outlet-delete-dialog';

const ServiceOutletRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ServiceOutlet />} />
    <Route path="new" element={<ServiceOutletUpdate />} />
    <Route path=":id">
      <Route index element={<ServiceOutletDetail />} />
      <Route path="edit" element={<ServiceOutletUpdate />} />
      <Route path="delete" element={<ServiceOutletDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ServiceOutletRoutes;
