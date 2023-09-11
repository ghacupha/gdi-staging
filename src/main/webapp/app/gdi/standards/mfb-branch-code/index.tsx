import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import MfbBranchCode from './mfb-branch-code';
import MfbBranchCodeDetail from './mfb-branch-code-detail';
import MfbBranchCodeUpdate from './mfb-branch-code-update';
import MfbBranchCodeDeleteDialog from './mfb-branch-code-delete-dialog';

const MfbBranchCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<MfbBranchCode />} />
    <Route path="new" element={<MfbBranchCodeUpdate />} />
    <Route path=":id">
      <Route index element={<MfbBranchCodeDetail />} />
      <Route path="edit" element={<MfbBranchCodeUpdate />} />
      <Route path="delete" element={<MfbBranchCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MfbBranchCodeRoutes;
