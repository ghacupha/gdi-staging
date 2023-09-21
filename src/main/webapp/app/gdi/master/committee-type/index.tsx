import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CommitteeType from './committee-type';
import CommitteeTypeDetail from './committee-type-detail';
import CommitteeTypeUpdate from './committee-type-update';
import CommitteeTypeDeleteDialog from './committee-type-delete-dialog';

const CommitteeTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CommitteeType />} />
    <Route path="new" element={<CommitteeTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CommitteeTypeDetail />} />
      <Route path="edit" element={<CommitteeTypeUpdate />} />
      <Route path="delete" element={<CommitteeTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CommitteeTypeRoutes;
