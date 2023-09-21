import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InterbankSectorCode from './interbank-sector-code';
import InterbankSectorCodeDetail from './interbank-sector-code-detail';
import InterbankSectorCodeUpdate from './interbank-sector-code-update';
import InterbankSectorCodeDeleteDialog from './interbank-sector-code-delete-dialog';

const InterbankSectorCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InterbankSectorCode />} />
    <Route path="new" element={<InterbankSectorCodeUpdate />} />
    <Route path=":id">
      <Route index element={<InterbankSectorCodeDetail />} />
      <Route path="edit" element={<InterbankSectorCodeUpdate />} />
      <Route path="delete" element={<InterbankSectorCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InterbankSectorCodeRoutes;
