import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DerivativeSubType from './derivative-sub-type';
import DerivativeSubTypeDetail from './derivative-sub-type-detail';
import DerivativeSubTypeUpdate from './derivative-sub-type-update';
import DerivativeSubTypeDeleteDialog from './derivative-sub-type-delete-dialog';

const DerivativeSubTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DerivativeSubType />} />
    <Route path="new" element={<DerivativeSubTypeUpdate />} />
    <Route path=":id">
      <Route index element={<DerivativeSubTypeDetail />} />
      <Route path="edit" element={<DerivativeSubTypeUpdate />} />
      <Route path="delete" element={<DerivativeSubTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DerivativeSubTypeRoutes;
