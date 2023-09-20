import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import RemittanceFlag from './remittance-flag';
import RemittanceFlagDetail from './remittance-flag-detail';
import RemittanceFlagUpdate from './remittance-flag-update';
import RemittanceFlagDeleteDialog from './remittance-flag-delete-dialog';

const RemittanceFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<RemittanceFlag />} />
    <Route path="new" element={<RemittanceFlagUpdate />} />
    <Route path=":id">
      <Route index element={<RemittanceFlagDetail />} />
      <Route path="edit" element={<RemittanceFlagUpdate />} />
      <Route path="delete" element={<RemittanceFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default RemittanceFlagRoutes;
