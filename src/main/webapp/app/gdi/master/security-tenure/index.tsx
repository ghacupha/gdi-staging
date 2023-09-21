import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SecurityTenure from './security-tenure';
import SecurityTenureDetail from './security-tenure-detail';
import SecurityTenureUpdate from './security-tenure-update';
import SecurityTenureDeleteDialog from './security-tenure-delete-dialog';

const SecurityTenureRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SecurityTenure />} />
    <Route path="new" element={<SecurityTenureUpdate />} />
    <Route path=":id">
      <Route index element={<SecurityTenureDetail />} />
      <Route path="edit" element={<SecurityTenureUpdate />} />
      <Route path="delete" element={<SecurityTenureDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SecurityTenureRoutes;
