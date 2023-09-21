import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SnaSectorCode from './sna-sector-code';
import SnaSectorCodeDetail from './sna-sector-code-detail';
import SnaSectorCodeUpdate from './sna-sector-code-update';
import SnaSectorCodeDeleteDialog from './sna-sector-code-delete-dialog';

const SnaSectorCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SnaSectorCode />} />
    <Route path="new" element={<SnaSectorCodeUpdate />} />
    <Route path=":id">
      <Route index element={<SnaSectorCodeDetail />} />
      <Route path="edit" element={<SnaSectorCodeUpdate />} />
      <Route path="delete" element={<SnaSectorCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SnaSectorCodeRoutes;
