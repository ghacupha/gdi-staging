import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import OutletType from './outlet-type';
import OutletTypeDetail from './outlet-type-detail';
import OutletTypeUpdate from './outlet-type-update';
import OutletTypeDeleteDialog from './outlet-type-delete-dialog';

const OutletTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<OutletType />} />
    <Route path="new" element={<OutletTypeUpdate />} />
    <Route path=":id">
      <Route index element={<OutletTypeDetail />} />
      <Route path="edit" element={<OutletTypeUpdate />} />
      <Route path="delete" element={<OutletTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default OutletTypeRoutes;
