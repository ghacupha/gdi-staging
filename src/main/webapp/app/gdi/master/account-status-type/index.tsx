import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccountStatusType from './account-status-type';
import AccountStatusTypeDetail from './account-status-type-detail';
import AccountStatusTypeUpdate from './account-status-type-update';
import AccountStatusTypeDeleteDialog from './account-status-type-delete-dialog';

const AccountStatusTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccountStatusType />} />
    <Route path="new" element={<AccountStatusTypeUpdate />} />
    <Route path=":id">
      <Route index element={<AccountStatusTypeDetail />} />
      <Route path="edit" element={<AccountStatusTypeUpdate />} />
      <Route path="delete" element={<AccountStatusTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccountStatusTypeRoutes;
