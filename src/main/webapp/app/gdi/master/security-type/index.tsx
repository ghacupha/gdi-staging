import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SecurityType from './security-type';
import SecurityTypeDetail from './security-type-detail';
import SecurityTypeUpdate from './security-type-update';
import SecurityTypeDeleteDialog from './security-type-delete-dialog';

const SecurityTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SecurityType />} />
    <Route path="new" element={<SecurityTypeUpdate />} />
    <Route path=":id">
      <Route index element={<SecurityTypeDetail />} />
      <Route path="edit" element={<SecurityTypeUpdate />} />
      <Route path="delete" element={<SecurityTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SecurityTypeRoutes;
